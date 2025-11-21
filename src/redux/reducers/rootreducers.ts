import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from '../slices/cartSlice';
import notificationReducer from '../slices/notificationSlice';
import userReducer from '../slices/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  notifications: notificationReducer,
  user: userReducer,
});

export default rootReducer;