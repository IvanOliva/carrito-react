import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { price, quantity, imageUrl, name } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
                <span className='value'> {quantity} </span>
                <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}

const mapDispatchToState = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToState)(CheckoutItem);