import { StyleSheet, I18nManager } from 'react-native';

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
  topBar: {
    backgroundColor: '#4F46E5',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  userIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
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
    marginTop: 2,
    textAlign: isRTL ? 'right' : 'left',
  },
  iconContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    gap: 16,
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: isRTL ? undefined : -2,
    left: isRTL ? -2 : undefined,
    minWidth: 16,
    height: 16,
    borderRadius: 12,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  routeNameText: {
    textAlign:'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButtonRight: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  backText: {
    color: '#4F46E5',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
