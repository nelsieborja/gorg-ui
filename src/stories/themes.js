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
  BASE: '#000',
  BASE_LIGHT: '#2d2d2d',
  WHITE: '#fff',
  DIRTY_WHITE: '#f7f8f9',

  DEFAULT: '#ecf1f3',
  DEFAULT_DARK: '#d4dfe8',
  PRIMARY: '#2d2d2d',
  PRIMARY_DARK: '#000',
  SECONDARY: '#00baff',
  SECONDARY_DARK: '#007fd0'
};

// FONTS
export const FONTS = {
  S: {
    BASE: rem(14)
  },
  W: {
    SEMIBOLD: 500
  }
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
    normal: COLORS.DEFAULT,
    dark: COLORS.DEFAULT_DARK,
    color: COLORS.BASE_LIGHT,
    colorActive: COLORS.BASE
  },
  [COLOR_VARIANTS.primary]: {
    normal: COLORS.PRIMARY,
    dark: COLORS.PRIMARY_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.PRIMARY_DARK
  },
  [COLOR_VARIANTS.secondary]: {
    normal: COLORS.SECONDARY,
    dark: COLORS.SECONDARY_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.SECONDARY_DARK
  }
};
