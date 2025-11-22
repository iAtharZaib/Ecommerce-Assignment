import { I18nManager, StyleSheet, Dimensions } from 'react-native';
const isRTL = I18nManager.isRTL;
const width = Dimensions.get('window').width;
const CARD_WIDTH = width * 0.45;

export default StyleSheet.create({
  backButton: {
    alignItems: 'center',
    borderColor: '#4F46E5',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    marginTop: 20,
    padding: 10,
  },
  itemImage: {
    width: CARD_WIDTH - 24,
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },

  backText: {
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: I18nManager.isRTL ? 0 : 8,
    marginRight: I18nManager.isRTL ? 8 : 0,
  },
  cartFooter: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderTopWidth: 1,
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 16,
    padding: 12,
  },

  clearButton: {
    backgroundColor: '#F87171',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  clearText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },

  emptyIcon: { height: 100, resizeMode: 'contain', width: 100 },
  emptyText: {
    color: '#999',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
  },
  itemPrice: { color: '#4F46E5', fontSize: 16, fontWeight: 'bold' },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: isRTL ? 'right' : 'left',
    width: CARD_WIDTH - 24,
  },
  mainContainer: { backgroundColor: '#f7f7f7', flex: 1 },
  qtyButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  qtyText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  quantity: { fontSize: 16, fontWeight: '600', marginHorizontal: 12 },
  quantityRow: {
    alignItems: 'center',
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
  },
  imageRow: {
    alignItems: 'center',
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
  },

  totalText: {
    color: '#4F46E5',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
