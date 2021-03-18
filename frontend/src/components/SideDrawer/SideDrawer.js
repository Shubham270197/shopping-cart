import './SideDrawer.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sideDrawer"];
    if (show) {
        sideDrawerClass.push("show")
    }

    const cart = useSelector(state => state.cart)
    const {
        cartItem
    } = cart

    const getCartCount = () => {
        return cartItem.reduce((memo, currval) => memo + Number(currval.qty),0)
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sideDrawer__links" onClick={click}>
                <li>
                    <Link to="/cart" className="">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sideDrawer__cartBadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;