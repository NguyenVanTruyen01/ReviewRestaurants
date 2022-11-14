import { configureStore, combineReducers} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducers from './authSlice'
import notifyReducers from "./notifySlice"
import postReducers from "./postSlice"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducers,
    notify: notifyReducers,
    post: postReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

//Redux toolkit auto add thunk
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

let persistor = persistStore(store)

const DataProvider = ({children})=>{
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default  DataProvider