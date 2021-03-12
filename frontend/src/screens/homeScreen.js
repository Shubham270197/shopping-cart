import './homeScreen.css'
import Product from '../components/Products'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <h2 className="homeScreen__title">Latest Products</h2>
            <div className="homeScreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen