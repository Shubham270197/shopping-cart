import * as actionTypes from '../constants/productConstants'

export const getProductReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }

        case actionTypes.GET_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: action.payload
            }
    
        default:
            return state;
    }
}

export const getProductDetailsReducers = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
            }

        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case actionTypes.GET_PRODUCTS_DETAILS_FAILURE:
            return {
                loading: false,
                product: action.payload
            }
    
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                loading: false,
                product: {}
            }

        default:
            return state;
    }
}