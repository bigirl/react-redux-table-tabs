import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore'

import { fetchData } from './store/actions';

import './styles/index.scss';
import reportWebVitals from './reportWebVitals';

const store = configureStore()

//Dispatch the fetchPosts() before our root component renders
store.dispatch(fetchData())

const renderApp = () =>
  render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
  }
  
  renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
