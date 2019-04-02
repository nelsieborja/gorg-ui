import { rem } from 'polished';

// CONSTANTS
export const COLOR_VARIATION = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};

export const SHAPE_VARIATION = {
  default: 'default',
  rounded: 'rounded',
  circle: 'circle'
};

export const VARIANT_TYPE = {
  default: 'default',
  outline: 'outline',
  text: 'text'
};

// COLORS
export const COLORS = {
  BASE: '#37334e',
  BASE_LIGHT: '#554f67',
  WHITE: '#fff',
  DIRTY_WHITE: '#fcfbf9',

  MAGENTA: '#4e2e54',
  MAGENTA_DARK: '#2e0438',
  ROSE: '#954f75',
  ROSE_DARK: '#6d3554',
  FLAMENCO: '#f8dac3',
  ROMANCE: '#f8f4e9',
  ROMANCE_DARK: '#ece5ca'
};

// FONTS
export const FONTS = {
  BASE: rem(14)
};

// ELEMENT PROPERTIES
export const ELEMENT = {
  BORDER_RADIUS: {
    [SHAPE_VARIATION.rounded]: rem(3),
    [SHAPE_VARIATION.circle]: rem(30)
  },
  HEIGHT: rem(40),
  PADDING: {
    X: rem(12),
    Y: rem(20)
  }
};

// MARGINS/PADDINGS
export const SPACINGS = {
  GUTTER: rem(10),
  GUTTER_XS: rem(5),
  GUTTER_X2: rem(20)
};

// TRANSITIONS
export const TRANSITION = {
  DURATION: '0.3s'
};

// VALUE MAPPING
export const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    backgroundColor: COLORS.ROMANCE,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE_LIGHT
  },
  [COLOR_VARIATION.primary]: {
    backgroundColor: COLORS.MAGENTA,
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.DIRTY_WHITE
  },
  [COLOR_VARIATION.secondary]: {
    backgroundColor: COLORS.ROSE,
    backgroundColorHover: COLORS.ROSE_DARK,
    color: COLORS.DIRTY_WHITE
  }
};
