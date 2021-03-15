import './products.css';
import {  Link } from 'react-router-dom'

const Product = () => {
    const userfirstname = JSON.parse(localStorage.getItem('information'))
    console.log("data is = ", userfirstname)
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=fomat&fit=crop&w=1352&q=80" alt="product name" />

            <div className="product__info">
                <p className="info__name">{userfirstname.firstName}</p>
                <p className="info__description">
                    this is our first product. Your leave request has been Approved by Shena Garg.
                    Leave Rule for Confirmed employees
                </p>

                <p className="info__price">$499.99</p>

                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product