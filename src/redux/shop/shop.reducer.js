import ShopActionsTypes from './shop.types';
import { updateCollections } from './shop.actions';

const INITIAL_DATA = {
    collections: null
}

const shopReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLETIONS:
            return {
                ...state,
                collections: action.payload
            }

        default:
            return state
    }
};

export default shopReducer;