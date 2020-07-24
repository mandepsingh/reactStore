import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
    return (
        <nav className="header">
            <Link to='/'>
              <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
           <div className="header-search">
                <input className="search" type="text" />
                <SearchIcon className="search-btn" type="button" />
           </div>
           <div className="header-nav">
               <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionone">Hello Mandeep</span>
                        <span className="header-optiontwo">Sign In</span>
                    </div>
               </Link>
           </div>
           <div className="header-nav">
               <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionone">Returns</span>
                        <span className="header-optiontwo">Orders</span>
                    </div>
               </Link>
           </div>
           <div className="header-nav">
               <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionone">Your</span>
                        <span className="header-optiontwo">Prime</span>
                    </div>
               </Link>
           </div>
        <Link to="/checkout" className="header-link">
            <div className="header-optionbasket">
                <ShoppingBasketIcon/>
                <span className="header-optiontwo">0</span>
            </div>
        </Link> 
        </nav>
    )
}

export default Navbar
