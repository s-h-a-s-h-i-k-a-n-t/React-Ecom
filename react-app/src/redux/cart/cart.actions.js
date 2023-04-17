import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type:CartActionTypes.ADD_ITEM,
  payload:item
})

// clearItemFromCart

export const clearItemFromCart = (cartItemToClear) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: cartItemToClear
})

export const removeItem = (itemQuantityToReduce) => ({
  type: CartActionTypes.REDUCE_CART_ITEM_QUANTITY,
  payload:itemQuantityToReduce
})

