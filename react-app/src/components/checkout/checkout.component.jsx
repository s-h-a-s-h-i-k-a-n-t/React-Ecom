import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems,total}) => {
    // console.log("checkout page---------------",CheckoutItem,total);
    return (
        <div className = "checkout-page" >
           <div className = "checkout-header">
               <div className = "header-block">
                   <span>Product</span>
               </div>
               <div className = "header-block">
                   <span>Description</span>
               </div>
               <div className = "header-block">
                   <span>Quantity</span>
               </div>
               <div className = "header-block">
                   <span>Price</span>
               </div>
               <div className = "header-block">
                   <span>Remove</span>
               </div>
           </div>
           {
              cartItems.map((cartItem)=>(
                <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />
              ))
           }
          { 
          (total != 0)?
         ( <div className = 'total'>
        <span>TOTAL: ${total}</span>
           </div>) :
           <div className = "empty-cart"> No Item in Your Cart </div>
           }
          
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total : selectCartItemTotal
})

export default connect(mapStateToProps) (CheckoutPage);