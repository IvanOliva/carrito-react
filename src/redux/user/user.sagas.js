import { put, takeLatest, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.util';

import UserActionTypes from './user.types';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle() {
    try {
        console.log(googleProvider);
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(googleSignInFailure(error))
    }

    // this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //     if (userAuth) {
    //         const userRef = await createUserProfileDocument(userAuth);

    //         userRef.onSnapshot(snapShot => {
    //             setCurrentUser({
    //                 id: snapShot.id,
    //                 ...snapShot.data()
    //             });
    //         });
    //     }
    //     setCurrentUser(userAuth);
    // });
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
};