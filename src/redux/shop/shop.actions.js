import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'

import ShopActionsTypes from './shop.types';

export const fetchCollectionStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionsTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = (errorMessage) => ({
    tupe: ShopActionsTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})


export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(
            snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionMap));
            }
        ).catch(
            error => dispatch(fetchCollectionFailure(error.message()))
        )
    }
}