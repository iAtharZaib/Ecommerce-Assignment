import { I18nManager, StyleSheet } from 'react-native';

const isRTL = I18nManager.isRTL;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    paddingVertical: 14,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  eyeButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  eyeIcon: {
    fontSize: 18,
  },

  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  passwordWrapper: {
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: isRTL ? 'row-reverse' : 'row',
    marginBottom: 16,
  },

  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },
});

export default styles;
