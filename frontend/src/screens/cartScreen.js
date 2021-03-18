import './cartScreen.css'
import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//components
import CartItem from '../components/CartItem/CartItem'

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const CartScreen = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {
        cartItem
    } = cart

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        console.log("cart item = ", cartItem)
        return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItem.reduce((memo, currVal) => (currVal.price * currVal.qty) + memo, 0)
    }

    return (
        <div className="cartScreen">
            <div className="cartScreen__left">
                <h2>Shopping Cart</h2>
                {cartItem.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go back</Link>
                    </div>
                ) : cartItem.map(item => (
                    <CartItem
                        item={item}
                        qtyChangeHandler={qtyChangeHandler}
                        removeFromCartHandler={removeFromCartHandler}
                    />
                ))}
            </div>
            <div className="cartScreen__right">
                <div className="cartScreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen