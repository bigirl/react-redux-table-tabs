import React from 'react';
import APIHeader from './components/APIHeader';
import Groups from './components/Groups';
import Tabs from './components/Tabs';
import Search from './components/Search';

export default function App() {
  return (
    <div className="saltApp">
          <APIHeader/>
          <Tabs/>
          <div className="content-wrap">
              <Search/>
              <Groups/>
          </div>
      </div>
  );
}
