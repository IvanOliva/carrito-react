import CartAtionsTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartAtionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartAtionsTypes.ADD_ITEM,
    payload: item
})