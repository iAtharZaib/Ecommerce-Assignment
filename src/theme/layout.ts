import type { ViewStyle } from 'react-native';

import { I18nManager } from 'react-native';

const rtlAware = (ltr: ViewStyle, rtl: ViewStyle): ViewStyle =>
  I18nManager.isRTL ? rtl : ltr;

export default {
  /* Flex directions */
  col: { flexDirection: 'column' },
  colReverse: { flexDirection: 'column-reverse' },
  row: rtlAware({ flexDirection: 'row' }, { flexDirection: 'row-reverse' }),
  rowReverse: rtlAware({ flexDirection: 'row-reverse' }, { flexDirection: 'row' }),
  wrap: { flexWrap: 'wrap' },

  /* Alignment */
  itemsCenter: { alignItems: 'center' },
  itemsEnd: rtlAware({ alignItems: 'flex-end' }, { alignItems: 'flex-start' }),
  itemsStart: rtlAware({ alignItems: 'flex-start' }, { alignItems: 'flex-end' }),
  itemsStretch: { alignItems: 'stretch' },

  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: rtlAware({ justifyContent: 'flex-end' }, { justifyContent: 'flex-start' }),
  justifyStart: rtlAware({ justifyContent: 'flex-start' }, { justifyContent: 'flex-end' }),

  /* Sizes */
  flex_1: { flex: 1 },
  fullHeight: { height: '100%' },
  fullWidth: { width: '100%' },

  /* Positions */
  absolute: { position: 'absolute' },
  bottom0: { bottom: 0 },
  left0: rtlAware({ left: 0 }, { right: 0 }),
  relative: { position: 'relative' },
  right0: rtlAware({ right: 0 }, { left: 0 }),
  top0: { top: 0 },

  /* Z-index */
  z1: { zIndex: 1 },
  z10: { zIndex: 10 },
} as const satisfies Record<string, ViewStyle>;
