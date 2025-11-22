import { StyleSheet, I18nManager } from "react-native";

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },


  userInfo: {
    backgroundColor: "transparent",
  },

  userName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: isRTL ? "right" : "left",
  },

  userEmail: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    textAlign: isRTL ? "right" : "left",
  },

  iconContainer: {
    flexDirection: isRTL ? "row-reverse" : "row",
    alignItems: "center",
    gap: 16,
  },

  badge: {
    position: "absolute",
    top: -2,
    right: isRTL ? undefined : -2,
    left: isRTL ? -2 : undefined,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 3,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  // Notification List
  listContent: {
    padding: 12,
    paddingBottom: 20,
  },

  notificationCard: {
    flexDirection: isRTL ? "row-reverse" : "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    position: "relative",
  },

  iconWrapper: {
    marginRight: isRTL ? 0 : 12,
    marginLeft: isRTL ? 12 : 0,
  },

  contentWrapper: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    textAlign: isRTL ? "right" : "left",
    marginBottom: 4,
  },

  message: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: isRTL ? "right" : "left",
    marginBottom: 4,
  },

  time: {
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: isRTL ? "right" : "left",
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4F46E5",
    position: "absolute",
    top: 8,
    right: isRTL ? undefined : 8,
    left: isRTL ? 8 : undefined,
  },

  markReadButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  markReadText: {
    color: "#4F46E5",
    fontSize: 14,
    fontWeight: "600",
  },
});
