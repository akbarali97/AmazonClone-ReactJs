import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <nav className="header">
            {/* show-menu-icon */}
            {/* logo */}
            <Link to='/login'>
            <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            {/* search-box */}
            <div className="header__search">
                <input type='text' className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* choose country */}
            {/* login-button */}
            {/* cart */}
        </nav>
    );
}

export default Header
