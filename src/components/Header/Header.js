import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src={logo} alt="logo" />
                <div className="menu">
                    <a href="#shop">Shop</a>
                    <a href="#order">Order</a>
                    <a href="#inventory">Inventory</a>
                    <a href="#about">About</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;