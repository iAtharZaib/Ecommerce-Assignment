import { StyleSheet, Dimensions, I18nManager } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.45;

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  userInfo: {
    padding: 16,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: CARD_WIDTH,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
