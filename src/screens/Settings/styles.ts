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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    marginHorizontal: '5%',
    width: '90%',
    alignSelf: 'center',
  },

  fieldRow: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },

  fieldRowLast: {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },

  fieldLabel: {
    fontSize: 15,
    marginHorizontal:3,
    fontWeight: '700',
    color: '#888',
    textTransform: 'uppercase',
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  fieldValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f2937',
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  buttonContainer: {
    width: '90%',
    gap: 12,
    alignSelf: 'center',
    flexDirection: 'column',
  },

  logoutButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 500,
    alignItems: 'center',
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
