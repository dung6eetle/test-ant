import React from 'react'
import classes from '../../classes/Header.module.css'
import Logo from './Logo'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className={classes.header_container}>
            <div className={classes.header_logo}>
              <Logo/>
            </div>
            <div className={classes.header_navbar}>
              <Navbar/>
            </div>
        </div>
    )
}
export default Header

