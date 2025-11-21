// src/redux/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  uid: string;
  name: string;
  email: string;
}

interface UserState {
  user: UserInfo | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },


    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },

  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
export const getUser = (state: { user: UserState }) => state.user.user;
