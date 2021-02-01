import { combineReducers } from 'redux';
import cartReducer from './cart/cart.redux';
import userReducer from './user/user.redux';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});