import './products.css';
import {  Link } from 'react-router-dom'

const Product = ({ name, productId, key, imageUrl, price, description }) => {
    console.log("yes buddy = ", name)
    const userfirstname = JSON.parse(localStorage.getItem('information'))
    console.log("data is = ", userfirstname)
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">
                    {description.substring(0, 100)}...
                </p>

                <p className="info__price">${price}</p>

                <Link to={`/product/${productId}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product