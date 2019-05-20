import { rem, rgba } from 'polished';

// ALIGNMENTS
export const ALIGNMENTS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};

// COLORS
export const COLOR_VARIANTS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};

export const SIDES = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom'
};

// SHAPES
export const SHAPE_VARIANTS = {
  default: 'default',
  rounded: 'rounded',
  circle: 'circle'
};

// TYPES
export const VARIANT_TYPES = {
  default: 'default',
  outline: 'outline',
  text: 'text'
};

// BREAKPOINTS
export const BREAKPOINTS = {
  xs: rem(360),
  sm: rem(600),
  md: rem(960),
  lg: rem(1280)
};

// COLORS
export const COLORS = {
  BASE: '#000',
  BASE_LIGHT: '#2d2d2d',
  WHITE: '#fff',
  DIRTY_WHITE: '#f7f8f9',
  RED: '#ea1000',

  DEFAULT: '#ecf1f3',
  DEFAULT_DARK: '#d4dfe8',
  PRIMARY: '#2d2d2d',
  PRIMARY_DARK: '#000',
  SECONDARY: '#00baff',
  SECONDARY_DARK: '#007fd0',

  BORDER_COLOR: '#eee',
  GREY: '#616161'
};

// FONTS
export const FONTS = {
  S: {
    BASE: rem(14),
    XS: rem(12),
    XXS: rem(11),
    L: rem(18)
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
  DISABLED: '0.5',
  CHILDREN_GAP: rem(8),
  HEIGHT: rem(42),
  PADDING: {
    Y: rem(12),
    X: rem(20),
    ICON: rem(30)
  },
  TICK_SIZE: rem(24),
  ICON: {
    DIMENSION: {
      HEIGHT: rem(16),
      WIDTH: rem(16)
    },
    DIMENSION_XS: {
      HEIGHT: rem(13),
      WIDTH: rem(13)
    }
  },
  SELECT: {
    MAX_HEIGHT: rem(252),
    MAX_WIDTH: rem(150)
  }
};

// MARGINS/PADDINGS
export const SPACINGS = {
  GUTTER: rem(10),
  GUTTER_XS: rem(5),
  GUTTER_X2: rem(20)
};

export const BOX_SHADOW = {
  LIGHT: `0 ${rem(5)} ${rem(20)} ${COLORS.BORDER_COLOR}`,
  DARK: `0 ${rem(5)} ${rem(20)} ${rgba(COLORS.BASE_LIGHT, 0.3)}`
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
    color: rgba(COLORS.BASE_LIGHT, 0.6),
    colorActive: rgba(COLORS.BASE, 0.7),
    hover: rgba(COLORS.DEFAULT, 0.4),
    active: rgba(COLORS.DEFAULT, 0.8)
  },
  [COLOR_VARIANTS.primary]: {
    normal: COLORS.PRIMARY,
    dark: COLORS.PRIMARY_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.PRIMARY_DARK,
    hover: rgba(COLORS.PRIMARY, 0.1),
    active: rgba(COLORS.PRIMARY, 0.2)
  },
  [COLOR_VARIANTS.secondary]: {
    normal: COLORS.SECONDARY,
    dark: COLORS.SECONDARY_DARK,
    color: COLORS.DIRTY_WHITE,
    colorActive: COLORS.SECONDARY_DARK,
    hover: rgba(COLORS.SECONDARY, 0.1),
    active: rgba(COLORS.SECONDARY, 0.2)
  }
};

// TAB/EXPANSION PANEL
export const SPECIAL_TEXT_COLOR = {
  normal: color =>
    color
      ? color === COLOR_VARIANTS.default
        ? COLOR_VARIANTS_MAP[color].color
        : COLOR_VARIANTS_MAP[color].normal
      : COLORS.GREY
};
