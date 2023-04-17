import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
      (accumulator,cartItem)=> cartItem.quantity + accumulator ,0
    )
)

// selectCartItemTotal

export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator,cartItem)=>
        accumulator + cartItem.price * cartItem.quantity
    ,0)
)

