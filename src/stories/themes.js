import { rem } from 'polished';

export const COLORS = {
  BASE: '#37334e',
  WHITE: '#fff',
  DIRTY_WHITE: '#fcfbf9',
  LIGHT_GREY: '#efefef',

  MAGENTA: '#4e2e54',
  MAGENTA_DARK: '#2e0438',
  ROSE: '#954f75',
  ROSE_DARK: '#6d3554',
  FLAMENCO: '#f8dac3',
  ROMANCE: '#f8f4e9',
  ROMANCE_DARK: '#ece2bb'
};

export const FONTS = {
  BASE: rem(14)
};

export const ELEMENT = {
  BORDER_RADIUS: {
    ROUNDED: '3px',
    CIRCLE: '30px'
  },
  HEIGHT: rem(38),
  PADDING: {
    X: rem(10),
    Y: rem(20)
  }
};

export const SPACINGS = {
  GUTTER: rem(10),
  GUTTER_XS: rem(5),
  GUTTER_X2: rem(20)
};

export const TRANSITION = {
  DURATION: '0.3s'
};

// HELPERS
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
export const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    backgroundColor: COLORS.ROMANCE,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    backgroundColor: COLORS.MAGENTA,
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.WHITE
  },
  [COLOR_VARIATION.secondary]: {
    backgroundColor: COLORS.ROSE,
    backgroundColorHover: COLORS.ROSE_DARK,
    color: COLORS.WHITE
  }
};
export const getShapeCSS = ({ shape }) => {
  if (shape === SHAPE_VARIATION.default) return;

  return `border-radius: ${ELEMENT.BORDER_RADIUS[shape.toUpperCase()]}`;
};
