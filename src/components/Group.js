import React, { useState } from "react";
import ItemRow from './ItemRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight,faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'

const Group = ({title, items, index, activeTab}) => {
    const empty = !items.length;

    // TODO: fix bug - same item opened in both tabs
    const [toggeGroup, setToggeGroup] = useState(false);
    const toggle = () => !empty && setToggeGroup(!toggeGroup);
    
    const parents = {
        activeTab,
        group: title
    };

    return (
        <div key={index} className={`group${empty ? ' empty' : ''}`}>
            <h4 onClick={toggle}>
                <FontAwesomeIcon icon={toggeGroup ? faCaretSquareDown : faCaretSquareRight} size="lg" />
                {title}{empty && "- no items to dispaly"}
            </h4>
            {!empty && 
                <div className={`group-content${toggeGroup ? " active" : ""}`}>
                    {items.map((item, idx) => <ItemRow key={idx} index={idx} item={item} {...parents}/>)}
                </div>}
        </div>
    );
}

Group.defaultProps = {
    title: "",
    items: [],
    index: 0
}

export default Group;
