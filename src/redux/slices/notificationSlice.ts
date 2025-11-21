// src/redux/slices/notificationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationItem {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  read: boolean;
  createdAt: number;
}

type NotificationState = {
  list: NotificationItem[];
}

const initialState: NotificationState = {
  list: [{
  createdAt: 1_732_023_201_291,
  id: "17320232012",
  message: "Item added to cart",
  read: false,
  type: "success"
},{
  createdAt: 1_732_023_201_291,
  id: "17320232013",
  message: "Item added to cart",
  read: true,
  type: "success"
},{
  createdAt: 1_732_023_201_291,
  id: "17320232014",
  message: "Item added to cart",
  read: false,
  type: "success"
},{
  createdAt: 1_732_023_201_291,
  id: "17320232015",
  message: "Item added to cart",
  read: false,
  type: "success"
}],
};

const notificationSlice = createSlice({
  initialState,
  name: "notifications",
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<NotificationItem, "id" | "read" | "createdAt">>
    ) => {
      state.list.unshift({
        id: Date.now().toString(),
        ...action.payload,
        createdAt: Date.now(),
        read: false,
      });
    },

    clearNotifications: (state) => {
      state.list = [];
    },

    deleteNotification: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((n) => n.id !== action.payload);
    },

    markAllRead: (state) => {
      state.list = state.list.map((n) => ({ ...n, read: true }));
    },

    markNotificationRead: (state, action: PayloadAction<string>) => {
      const notification = state.list.find((n) => n.id === action.payload);
      if (notification) notification.read = true;
    },
  },
});

export const {
  addNotification,
  clearNotifications,
  deleteNotification,
  markAllRead,
  markNotificationRead,
} = notificationSlice.actions;
export default notificationSlice.reducer;
export const getNotifications = (state: { notifications: NotificationState }) =>
  state.notifications.list;
export const getUnreadCount = (state: { notifications: NotificationState }) =>
  state.notifications.list.filter((n) => !n.read).length;

