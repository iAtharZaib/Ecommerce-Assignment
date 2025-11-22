import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserInfo = {
  email: string;
  name: string;
  uid: string;
  createdAt: number;
}

type UserState = {
  isLoggedIn: boolean;
  user: null | UserInfo;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    email:"",
    name:"",
    uid:"",
    createdAt: 0
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },


    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },

  },
});

export const { logoutUser, setUser } = userSlice.actions;
export default userSlice.reducer;
export const getUser = (state: { user: UserState }) => state.user.user;
