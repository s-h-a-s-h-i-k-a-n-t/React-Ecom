import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart, reduceCartQuantitryFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems : []
}

export const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
        return {
            ...state,
            cartItems : addItemToCart(state.cartItems,action.payload)
        }

        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload)
        }

        case CartActionTypes.REDUCE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems : reduceCartQuantitryFromCart(state.cartItems,action.payload)
        }


            
        default:
            return state;
    }
}