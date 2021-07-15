import React from "react";
import classes from './NavBar.module.css';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

export type NavBarType = {}

const NavBar: React.FC<NavBarType> = () => {

    return (
        <nav className={classes.navBarStyle}>
            <div>
                <WbCloudyIcon />
            </div>
            <div>
                 <BookmarksIcon />
            </div>
        </nav>
    )

}

export default NavBar;