import React from "react";
import classes from './Header.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export type HeaderType = {}

const Header: React.FC<HeaderType> = () => {

    return (
        <header className={classes.headerStyle}>
                <span className={classes.imageFinder}>Image Finder</span>
                <span>
                    <AccountCircleIcon fontSize={"large"}/>
                </span>
        </header>
    )

}

export default Header;