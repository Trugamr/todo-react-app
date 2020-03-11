import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger'

import rootReducer from './root.reducer'

const persistConfig = {
  key: 'user',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : []

// export default createStore(rootReducer, applyMiddleware(...middlewares))

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)
export const persistor = persistStore(store)
