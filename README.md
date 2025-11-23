# Ecommerce-Assignment

A complete **React Native Ecommerce App** built using **TypeScript**, **Redux Toolkit**, **React Navigation**, and **Firebase Cloud Messaging (FCM)** with **Notifee** for Android push notifications.  
Supports **RTL (Arabic)**, **theming**, **cart functionality**, **notifications**, and **persisted global state**.

## 🚀 Features

- 🛒 Product Listing with pricing, images, and add-to-cart  
- 🛍️ Cart Screen with quantity update, total calculation & clear cart  
- 🔔 Push Notifications (Android only) using FCM + Notifee  
- ✉️ Notification Screen with Read/Unread status  
- 🌙 Dark/Light Theme using custom ThemeProvider  
- 🌍 Multilingual (English + Arabic) with RTL support  
- 💾 Persisted Redux Store (cart, notifications, user, settings)  
- 📦 Modular Clean Architecture

## 🛠️ Tech Stack

- React Native (TypeScript)
- Redux Toolkit & Redux Persist
- React Navigation
- i18n (Arabic + English)
- Firebase Messaging
- Notifee
- MMKV Storage
- Custom Theming

## 📦 Installation

### Clone Repo
```
git clone https://github.com/iAtharZaib/Ecommerce-Assignment.git
cd Ecommerce-Assignment
```

### Install Dependencies
```
yarn install
```

### Add Firebase Config
Place:
```
android/app/google-services.json
```

## ▶️ Run on Android
```
cd android && ./gradlew clean && cd ..
yarn android
```

## 🔔 Push Notifications (Android Only)

Recommended FCM payload:
```
{
  "to": "FCM_TOKEN",
  "data": {
    "title": "New Offer!",
    "body": "Discount available now!"
  }
}
```

## 🌍 RTL Support

Enabled globally in `App.tsx` with:
```
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
```

## 🎨 Theming
Dynamic theme switching stored in MMKV.

## 🧑‍💻 Author
**iAthar Zaib**  
Portfolio: https://www.atharzaib.com  
GitHub: https://github.com/iAtharZaib

## 📄 License
MIT License
