export const addItemToCart = (cartItems ,cartItemToAdd) => {
    const isItemExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(isItemExist) {
        return cartItems.map(
            cartItem => 
                cartItem.id === cartItemToAdd.id ?
                 {
                    ...cartItem,
                    quantity : cartItem.quantity+1
                } :
                cartItem
            
        )
    }

    return [
        ...cartItems,{
            ...cartItemToAdd,
            quantity:1
        }
    ]
}

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    return cartItems.filter(cartItem=>cartItem.id != cartItemToRemove.id);
}

export const reduceCartQuantitryFromCart = (cartItems,cartItemQuantityToReduce) => {
     if(cartItemQuantityToReduce.quantity == 1){
        return  removeItemFromCart(cartItems,cartItemQuantityToReduce);    
     }
  return   cartItems.map(cartItem=>
        (cartItem.id === cartItemQuantityToReduce.id) ?
          { 
           ...cartItem,
           quantity: cartItem.quantity -1 
        }:
        cartItem
   
    )
}