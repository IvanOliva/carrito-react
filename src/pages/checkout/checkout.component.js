import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

const CheckOutPage = ({ cartItems, cartTotal }) => (

    < div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Product
            </div>
            <div className='header-block'>
                Description
            </div>
            <div className='header-block'>
                Quantity
            </div>
            <div className='header-block'>
                Price
            </div>
            <div className='header-block'>
                Remove
            </div>
        </div>
        { cartItems.map((cartItem) =>
            <CheckoutItem id={cartItem.id} cartItem={cartItem} />
        )}

        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckOutPage);