// src/redux/slices/notificationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NotificationItem = {
  date: string;
  description: string;
  id: number;
  read: boolean;
  title:string;
}

type NotificationState = {
  list: NotificationItem[];
}

const initialState: NotificationState = {
  list: [{
    date: "2025-11-22 10:30 AM",
    description: "Your order has been shipped.",
    id: 1,
    read: false,
    title: "Essence Mascara Lash Princess",
  },
  {
    date: "2025-11-21 09:15 AM",
    description: "Your item is out for delivery.",
    id: 2,
    read: true,
    title: "Eyeshadow Palette with Mirror",
  },
  {
    date: "2025-11-20 05:20 PM",
    description: "Order placed successfully.",
    id: 3,
    read: false,
    title: "Powder Canister",
  },
  {
    date: "2025-11-19 01:00 PM",
    description: "Delivered to your address.",
    id: 4,
    read: false,
    title: "Red Lipstick",
  },
  {
    date: "2025-11-18 11:45 AM",
    description: "Your refund has been processed.",
    id: 5,
    read: false,
    title: "Red Nail Polish",
  },],
};

const notificationSlice = createSlice({
  initialState,
  name: "notifications",
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<NotificationItem, "createdAt" | "id" | "read">>
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

