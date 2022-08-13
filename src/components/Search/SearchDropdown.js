import React from 'react';
import Row from '../Popular/Rows/Row';
import classes from '../../stylesheets/components/_search.scss'
import { connect } from 'react-redux';

const SearchDropdown = ({ shows, query }) => {

    const data = [...shows.movies, shows.shows]
    const renderResults = (jsonData) => {
        return jsonData.length
            ? jsonData.map((result, idx) => (
                <Row key={idx} src={result.img} />
            ))
            : null;
    };

    const filterQuery = (e) => {
        return e.filter(({ title }) =>
            new RegExp(`[\w]*${query}[\w]*`, 'i').test(title)
        );
    };


    return (
        <div className={classes.dropdown}>
            <h1>{`Showing search results for: "${query}"`}</h1>
            <div className={classes.dropdown__container}>
                {renderResults(filterQuery(data))}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return { shows: state.shows }
}

export default connect(mapStateToProps, {})(SearchDropdown)