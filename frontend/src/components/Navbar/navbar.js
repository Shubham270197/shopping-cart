import React from 'react'
import './navbar.css'
import { Link, Router } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/*links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      Shop
                    </Link>
                </li>
            </ul>

            <div className="handburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar