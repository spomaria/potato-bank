import React from 'react';
import './Navbar.css';

const Navbar = () => {
    React
    return (
        <div className='navbar'>
            <div className="nav-title">
                <span id='bolder'>Jos<span id='brown'>Potato</span></span>
            </div>
            <div className="nav-icons">
                <div><a href="/">Home</a></div>
                <div><a href="/about">About</a></div>
                <div><a href="/services">Services</a></div>
                <div><a href="/contact">Contact Us</a></div>
                <div><a href="/testimonials">Testimonials</a></div>
            </div>
        </div>  
  )
}

export default Navbar;