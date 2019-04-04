import { rem } from 'polished';

// CONSTANTS
export const COLOR_VARIANTS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};

export const SHAPE_VARIANTS = {
  default: 'default',
  rounded: 'rounded',
  circle: 'circle'
};

export const VARIANT_TYPES = {
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
  ROMANCE: '#ece5ca',
  ROMANCE_DARK: '#e3d5b2'
};

// FONTS
export const FONTS = {
  BASE: rem(14)
};

// ELEMENT PROPERTIES
export const ELEMENT = {
  BORDER_RADIUS: {
    [SHAPE_VARIANTS.rounded]: rem(3),
    [SHAPE_VARIANTS.circle]: rem(30)
  },
  HEIGHT: rem(40),
  PADDING: {
    X: rem(12),
    Y: rem(20)
  },
  TICK_SIZE: rem(20),
  ICON: {
    DIMENSION: {
      HEIGHT: rem(16),
      WIDTH: rem(16)
    }
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
  EASE: 'cubic-bezier(0.4, 0, 0.2, 1)',
  DURATION: '0.3s'
};

// VALUE MAPPING
export const COLOR_VARIANTS_MAP = {
  [COLOR_VARIANTS.default]: {
    normal: COLORS.ROMANCE,
    dark: COLORS.ROMANCE_DARK,
    color: COLORS.BASE_LIGHT,
    colorActive: COLORS.BASE
  },
  [COLOR_VARIANTS.primary]: {
    normal: COLORS.MAGENTA,
    dark: COLORS.MAGENTA_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.MAGENTA_DARK
  },
  [COLOR_VARIANTS.secondary]: {
    normal: COLORS.ROSE,
    dark: COLORS.ROSE_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.ROSE_DARK
  }
};
