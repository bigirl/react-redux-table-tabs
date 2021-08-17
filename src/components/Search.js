import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { toggleShowPIIonly, handleChangeSearchText, resetFilters } from '../store/actions';

const Search = () => {
    const showPIIonly = useSelector((state) => state.showPIIonly);
    //const searchText = useSelector((state) => state.searchText);
    const dispatch = useDispatch();
    
    // TODO: empty input field on reset

    return (
        <div className="search">
            <FontAwesomeIcon className="icon" icon={faSearch} size="lg" />
            <input className="search-input" onChange={(e) => dispatch(handleChangeSearchText(e.target.value))} placeholder="Search" />
            <input type="checkbox" checked={showPIIonly} onChange={() => dispatch(toggleShowPIIonly(!showPIIonly))} />
            <button className="apply">Apply</button> 
            <button className="reset" onClick={() => dispatch(resetFilters())}>Reset Filters</button>
        </div>
    )
}

export default Search;