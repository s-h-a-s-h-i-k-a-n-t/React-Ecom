import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/icons/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div onClick = {toggleCartHidden} className = "cart-icon">
        <ShoppingIcon className = "shopping-icon"/>
<span className = "item-count">{itemCount}</span>
    </div>
)


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

