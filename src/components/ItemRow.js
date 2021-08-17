import React from 'react'
import { useDispatch } from 'react-redux'
import { setPII, setMASKED } from '../store/actions';

const ItemRow = ({activeTab, group, index, item}) => {
    const dispatch = useDispatch();
    const {name, pii, masked, type} = item;
    // TODO: fix bug - when filtered the index is in offset (PII)
    return (
        <p key={index} className="group-item-row">
            <span>{name}</span>
            <button onClick={() => dispatch(setPII(!pii, activeTab, group, index))} className={`pii ${pii ? 'on' : ''}`}>PII</button>
            <button onClick={() => dispatch(setMASKED(!masked, activeTab, group, index))} className={`masked ${masked ? 'on' : ''}`}>Masked</button>
            <span className="item-type">{type}</span>
        </p>
    )
}

ItemRow.defaultProps = {
    activeTab: "request",
    group: "header",
    index: 0,
    item: []
}

export default ItemRow;