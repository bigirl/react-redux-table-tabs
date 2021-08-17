import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab } from '../store/actions';
import { ACTIVE_TAB_REQUEST, ACTIVE_TAB_RESPONSE} from '../includes/consts';

const Tabs = () => {
    const activeTab = useSelector((state) => state.activeTab);
    const dispatch = useDispatch();

    const buttons = [
      {
        type: ACTIVE_TAB_REQUEST,
        isActive: activeTab === ACTIVE_TAB_REQUEST,
        title: "Request"
      },
      {
        type: ACTIVE_TAB_RESPONSE,
        isActive: activeTab === ACTIVE_TAB_RESPONSE,
        title: "Response"
      }
    ];

    return (
      <div className="tabs">
        {buttons.map(({type, isActive, title}, i) => 
          <button key={i} onClick={() => dispatch(setActiveTab(type))} className={`tab-button${isActive ? ' on' : ''}`}>{title}</button>
        )}
      </div>
    )
}

export default Tabs;