import './cartScreen.css'

//components
import CartItem from '../components/CartItem/CartItem'

const CartScreen = () => {
    return (
        <div className="cartScreen">
            <div className="cartScreen__left">
                <h2>Shopping Cart</h2>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cartScreen__right">
                <div className="cartScreen__info">
                    <p>Subtotal (0) items</p>
                    <p>$499.9</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen