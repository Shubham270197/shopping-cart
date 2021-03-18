import React from 'react'
import './navbar.css'
import { Link, Router } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart)
    const {
        cartItem
    } = cart

    const getCartCount = () => {
        return cartItem.reduce((memo, currval) => memo + Number(currval.qty),0)
    }

    return (
        <div className="navbar">
            {/*Logo */}
            <div className="navbar__logo">
                <h2>Navbar</h2>
            </div>

            {/*links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      Shop
                    </Link>
                </li>
            </ul>

            <div className="handburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar