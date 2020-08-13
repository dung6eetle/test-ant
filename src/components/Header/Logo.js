import React from 'react'
import bitmap from '../../assets/img/Bitmap.svg'
import classes from '../../classes/Header.module.css'

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={bitmap}/>
        </div>
    )
}
export default Logo