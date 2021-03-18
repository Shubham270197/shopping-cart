import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItem: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log("yes cart = ", action.payload)
            const item = action.payload

            const existItem = state.cartItem.find((itm) => itm.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((x) => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItem: [...state.cartItem, item]
                }
            }
        
        case actionTypes.REMOVE_FROM_CART:
            console.log("hello ", state.cartItem, "hello 3", action.payload)
            return {
                ...state,
                cartItem: state.cartItem.filter((x) => x.product !== action.payload)
            }

        default:
            return state;
    }
}