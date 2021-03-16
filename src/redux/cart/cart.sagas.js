import { add, put, all, takeLatest, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions'

export function* onClearCart() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onClearCart)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}