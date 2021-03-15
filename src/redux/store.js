import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducers from './root-reducer'

import rootSaga from './root-saga';


const asagaMiddleware = createSagaMiddleware();

const middleWares = [asagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middleWares));

asagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor }; 