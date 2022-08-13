import React from 'react'
import classes from '../../../stylesheets/components/_rows.scss';
const Row = ({ src }) => {
    return (
        <img className={classes.row__poster} src={src} alt="" />
    )
}

export default Row
