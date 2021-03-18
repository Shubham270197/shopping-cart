import './productScreen.css'
import React, { useState, useEffect } from 'react'
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

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        console.log("initiate = ", product._id, "aur = ", qty)
        history.push('/cart')
    }
    
    return (
        <div className="productScreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <React.Fragment>
                    <div className="productScreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    </div>
                    <div className="productScreen__right">
                        <div className="right__info">
                            <p>
                                Price: <span>${product.price}</span>
                            </p>
                            <p>
                                Status: 
                                <span>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => updateQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            )}
            
        </div>
    )
}

export default ProductScreen