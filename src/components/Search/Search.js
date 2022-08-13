import React, { useState, useRef } from 'react';
import SearchDropdown from './SearchDropdown';
import classes from '../../stylesheets/components/_search.scss';
import { useHistory } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    const onChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className={classes.search__container} >
            <i className="fas fa-search" />
            <input
                ref={inputRef}
                className={classes.search}
                placeholder="Titles, people, genres"
                type="text"
                value={query}
                onChange={onChange} />
            {query !== '' && (
                <i className="fas fa-times" onClick={() => setQuery('')} />
            )}
            {query !== '' && <SearchDropdown query={query} />}
        </div>
    )
}

export default Search
