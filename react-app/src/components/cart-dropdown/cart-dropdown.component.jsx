import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const { Button } = require("@material-ui/core");

const CartDropDown = ({ cartItems,history,dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">

            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <span className="empty-value">Your Cart is Empty</span>

            }
        </div>
        <Button  onClick = { () => {
        history.push('/checkout');
         dispatch(toggleCartHidden())   
             }} variant="contained" color="primary">
           Go To Checkout
      </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));