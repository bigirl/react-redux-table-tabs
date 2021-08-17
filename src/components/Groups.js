import React from 'react'
import Group from './Group';
import { useSelector } from 'react-redux'

const Groups = () => {
    const activeTab = useSelector((state) => state.activeTab);
    const showPIIonly = useSelector((state) => state.showPIIonly);
    const searchText = useSelector((state) => state.searchText);
    const groups = useSelector((state) => state[activeTab]);
    return (
      <div className="group-table">
          <p className="group-item-row header">
            <span>Name</span>
            <span>PII</span>
            <span>Masking</span>
            <span>Type</span>
          </p>
          {groups && Object.entries(groups).map(([key, value], i) => {
            let items = showPIIonly ? value.filter(item => (item.pii === true)) : value;
            items = searchText ? items.filter(item => (item.type.includes(searchText))) : items;
            console.log(items);
            return <Group key={i} title={key} items={items} index={i} activeTab={activeTab}/>
          })}
      </div>
    )
  }

export default Groups;
