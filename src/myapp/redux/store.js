import { combineReducers, configureStore } from "@reduxjs/toolkit"
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
import storage from "redux-persist/lib/storage"

import authReducer from '../redux/authSlice'
import profileReducer from '../redux/profileSlice'
import postReducer from '../redux/postSlice'
import photoReducer from '../redux/photoSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    posts: postReducer,
    photo:photoReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)