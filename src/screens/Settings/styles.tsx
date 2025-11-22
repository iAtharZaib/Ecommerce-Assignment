import {  I18nManager, StyleSheet } from 'react-native';

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  // Top bar
  topBar: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: isRTL ? 'right' : 'left',
  },

  userEmail: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    textAlign: isRTL ? 'right' : 'left',
  },

  iconContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    gap: 16,
  },

  iconWrapper: {
    padding: 5,
  },

  // Content
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },

  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  labelText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: isRTL ? 'right' : 'left',
  },

  valueText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: isRTL ? 'right' : 'left',
  },
});
