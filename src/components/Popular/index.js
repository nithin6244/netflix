import React from 'react';
import { connect } from 'react-redux';
import Row from './Rows/Row';
import classes from '../../stylesheets/components/_rows.scss'

const Rows = ({ data }) => {
    return (
        <div className={classes.row__container}>
            <h1>Popular On Netflix</h1>
            <div className={classes.row}>
                {data.shows.map((show, idx) => {
                    return (
                        <Row key={idx} title={show.title} src={show.img} />
                    )
                })}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return { data: state.shows }
}

export default connect(mapStateToProps, {})(Rows)
