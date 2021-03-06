import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IJf1LJM9ffqnOYd1JT2ZCArLPxb8ApxivWUxuqovtiBtw0se5Kex6at1jpT8Cr0h9Wn2BJYiTGhN6JdMcsIguKI00OkLFSYvR'
    const onToken = (token) => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Successfull payment');

        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error));
            alert('There was an issue with your payment...')
        })
    }
    return (
        <StripeCheckout
            label='PAY NOW'
            name='Crwn Clothes'
            shippingAddress
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={` Your total is: $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;