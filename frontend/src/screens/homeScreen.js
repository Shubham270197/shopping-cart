import './homeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Products'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {

    const dispatch = useDispatch()
    
    const getProducts = useSelector(state => state.getProducts)

    const {
        Products,
        loading
    } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    const userData = {
        'firstName': 'Shubham',
        'lastName': 'Thakur',
        'age': '25'
    }
        JSON.stringify(localStorage.setItem('information', JSON.stringify(userData)))
    return (
        <div className="homeScreen">
            <h2 className="homeScreen__title">Latest Products</h2>
            <div className="homeScreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
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