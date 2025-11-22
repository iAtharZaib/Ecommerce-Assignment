import { I18nManager, StyleSheet } from 'react-native';

const isRTL = I18nManager.isRTL;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    borderRadius: 500,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
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
    paddingHorizontal: 24,
  },

  gradientContainer: {
    backgroundColor: '#f8f9ff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  eyeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginLeft: isRTL ? 0 : 'auto',
    marginRight: isRTL ? 'auto' : 0,
  },

  eyeIcon: {
    fontSize: 18,
  },

  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
    borderRadius: 500,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  languageButton: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 500,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  languageButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },

  passwordInput: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  passwordWrapper: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
    borderRadius: 500,
    borderWidth: 1,
    flexDirection: isRTL ? 'row' : 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingRight: isRTL ? 0 : 0,
  },

  title: {
    alignSelf: 'center',
    color: '#1f2937',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },

  linkButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 500,
    marginTop: 12,
    paddingVertical: 14,
  },

  linkButtonText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
