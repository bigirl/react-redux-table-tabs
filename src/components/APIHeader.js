import React from 'react'
import { useSelector } from 'react-redux'

export const APIHeader = () => {
    const api = useSelector((state) => state.api);
    const method = useSelector((state) => state.method);
    const path = useSelector((state) => state.path);

    return (
        <header>
            <h1>
                <span className="heading">{method}</span> {path}
            </h1>
            <p>{`All APIs > ${api} > ${path}`}</p>
        </header>
    )
}

export default APIHeader;
