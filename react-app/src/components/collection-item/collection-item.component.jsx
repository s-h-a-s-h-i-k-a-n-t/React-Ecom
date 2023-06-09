import React from 'react';
import './collection-item.styles.scss'
import { Button } from '@material-ui/core';
import { addItem } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
const CollectionItem = ({item,addItem}) => {
  const {name,price,imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
  
      <div className="collection-footer">
        <span className="name" >{name}</span>
        <span className="price" >{price}</span>
      </div>
      <Button onClick = {()=>{console.log("item:",item);addItem(item)}} className="custom-padding"  variant="contained" color="primary">
        Add to Carts
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps) (CollectionItem);