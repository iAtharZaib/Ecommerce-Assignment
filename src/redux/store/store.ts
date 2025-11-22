import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger'
import rootReducer from '../reducers/rootreducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'user', 'notifications'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: true,
});

export const persistor = persistStore(store);
