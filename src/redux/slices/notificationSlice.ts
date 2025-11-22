import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NotificationItem = {
  title: string;
  body: string;
  id: string;
  date: string;
  read: boolean;
};

type NotificationState = {
  list: NotificationItem[];
};

const initialState: NotificationState = {
  list: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<NotificationItem, "read">>
    ) => {
      state.list.unshift({
          ...action.payload,
          read: false,
      });
    },

    clearAllNotifications: (state) => {
      state.list = [];
    },

    markAllRead: (state) => {
      state.list = state.list.map((n) => ({ ...n, read: true }));
    },

    markNotificationRead: (state, action: PayloadAction<number>) => {
      const notification = state.list.find((n) => n.id === action.payload);
      if (notification) notification.read = true;
    },
  },
});

export const {
  addNotification,
  clearAllNotifications,
  markAllRead,
  markNotificationRead,
} = notificationSlice.actions;

export default notificationSlice.reducer;

export const getNotifications = (state: { notifications: NotificationState }) =>
  state.notifications.list;

export const getUnreadCount = (state: { notifications: NotificationState }) =>
  state.notifications.list.filter((n) => !n.read).length;
