import React from 'react';
import './NavBar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">EZYFIX</div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for deals" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="icons-container">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>
      <div className="categories-container">
        <a href="#" className="category">Nearby</a>
        <a href="#" className="category">Goods</a>
        <a href="#" className="category">Hotels</a>
        <a href="#" className="category">Gift Ideas</a>
        <a href="#" className="category">Coupons</a>
        <a href="#" className="category">Things To Do</a>
        <a href="#" className="category">Auto & Home Improvement</a>
        <a href="#" className="category">Small Business</a>
        <a href="#" className="category">Food & Drink</a>
      </div>
    </div>
  );
};

export default NavBar;
