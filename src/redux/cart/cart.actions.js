import CartAtionsTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartAtionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartAtionsTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartAtionsTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: CartAtionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})