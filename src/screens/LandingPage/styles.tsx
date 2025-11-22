import { Dimensions, I18nManager, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.45;

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
    addButton: {
        backgroundColor: '#4F46E5',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },

    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    badge: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        height: 16,
        justifyContent: 'center',
        left: isRTL ? -2 : undefined,
        minWidth: 16,
        paddingHorizontal: 3,
        position: 'absolute',
        right: isRTL ? undefined : -2,
        top: -2,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    card: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        elevation: 3,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        width: CARD_WIDTH,
    },

    cardContent: {
        alignItems: 'center',
        padding: 12,
    },
    container: {
        backgroundColor: '#f7f7f7',
        flex: 1,
    },

    iconContainer: {
        alignItems: 'center',
        flexDirection: isRTL ? 'row-reverse' : 'row',
        gap: 16,
    },
    iconWrapper: {
        padding: 5,
    },

    listContent: {
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    mainContainer: {
        backgroundColor: '#f7f7f7',
        flex: 1,
    },
    productImage: {
        height: CARD_WIDTH,
        resizeMode: 'cover',
        width: '100%',
    },
    productPrice: {
        color: '#4F46E5',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        textAlign: 'center',
    },
    row: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    userEmail: {
        color: '#fff',
        fontSize: 14,
        marginTop: 4,
        textAlign: isRTL ? 'right' : 'left',
    },

    userInfo: {
        backgroundColor: 'transparent',
    },
    userName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: isRTL ? 'right' : 'left',
    },
});
