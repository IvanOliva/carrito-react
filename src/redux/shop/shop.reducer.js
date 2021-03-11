import ShopActionsTypes from './shop.types';
import { updateCollections } from './shop.actions';

const INITIAL_DATA = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case ShopActionsTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            };

        case ShopActionsTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };

        case ShopActionsTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            };

        default:
            return state
    }
};

export default shopReducer;