import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe-button.component';

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
        <div className='test-warning'>
            Please use the following credentials for payment
             <br />
            4242 4242 4242 4242 - Exp: 03/21 - CVV: 123

        </div>
        <StripeCheckoutButton price={cartTotal} />

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckOutPage);