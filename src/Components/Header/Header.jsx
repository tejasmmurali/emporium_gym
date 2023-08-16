import React from 'react';
import './header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} className='logo'/>
            <ul className='headerMenu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonals</li>
            </ul>

        </div>
    );
}

export default Header;
