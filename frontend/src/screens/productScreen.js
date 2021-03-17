import './productScreen.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Actions
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
//import Product from '../../../backend/models/Product'

const ProductScreen = ({ match, history }) => {

    const [qty, updateQty] = useState(1)
    const dispatch = useDispatch()

    const productDetail = useSelector(state => state.getProductDetails)

    const {
        loading,
        error,
        product
    } = productDetail

    useEffect(() => {
        if(product && match.params.id !== product._id ) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, match, product])
    
    return (
        <div className="productScreen">
            <div className="productScreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=fomat&fit=crop&w=1352&q=80" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $500</p>
                    <p>Description: this is our first product. Your leave request has been Approved by Shena Garg.
                    Leave Rule for Confirmed employees.</p>
                </div>
            </div>
            <div className="productScreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$500</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen