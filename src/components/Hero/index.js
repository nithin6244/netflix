import React, { useState } from 'react'
import { connect } from 'react-redux';
import Rows from '../Popular/index'
import classes from '../../stylesheets/components/_hero.scss';

const Hero = ({ shows }) => {

    const m = shows.movies[0]

    return (
        <div
            className={classes.hero__cover}
            style={{ backgroundImage: `url(${m.img})` }}>
            <div className={classes.hero__contents}>
                <h1 className={classes.hero__title}>{m.title}</h1>

                <div className={classes.hero__buttons}>
                    <button className={classes.banner__button}>Play</button>
                    <button className={classes.banner__button}>More Info</button>
                </div>

                <h1 className={classes.hero__description}>{m.description}</h1>
            </div>
            <Rows />
        </div>
    )
}



const mapStateToProps = (state) => {
    return { shows: state.shows }
}

export default connect(mapStateToProps, {})(Hero)