import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValues } from "./StateProvider"

function Header() {
    const [{cart}] = useStateValues();
    return (
        <nav className="header">
            {/* show-menu-icon */}
            {/* logo */}
            <Link to='/login'>
            <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=''
            />
            </Link>
            {/* search-box */}
            <div className="header__search">
                <input type='text' className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 links */}
            <div className='header__nav'>
            {/* login-button */}
            <Link to='/login' className="header__link">
                <div className="header__options">
                    <span className="header__options1">Hello Guest</span>
                    <span className="header__options2">Sign In</span>
                </div>
            </Link>
            {/* Orders */}
            <Link to='orders' className="header__link">
            <div className="header__options">
                    <span className="header__options1">Orders &</span>
                    <span className="header__options2">returns</span>
                </div>
            </Link>
            {/* prime */}
            <Link to='/' className="header__link">
            <div className="header__options">
                    <span className="header__options1">amazon</span>
                    <span className="header__options2">Prime</span>
                </div>
            </Link>
            {/* Cart */}
            <Link to='/Checkout' className="header__link">
            <div className="header__optionsCart">
                {/* cart icon */}
                    <ShoppingBasketIcon /> 
                {/* number of items in cart */}
                    <span className="header__options1 header__optionsitemcount">{cart?.length}</span>
                </div>
            </Link>
            </div>
        </nav>
    );
}

export default Header
