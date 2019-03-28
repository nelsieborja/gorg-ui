import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLORS, FONTS, ELEMENT } from '../themes';

const { X, Y } = ELEMENT.PADDING;

export const COLOR_PROP = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};
export const VARIANT_PROP = {
  solid: 'solid',
  text: 'text',
  outline: 'outline'
};

export const COLOR_MAP = {
  [COLOR_PROP.default]: {
    normal: COLORS.ROMANCE,
    dark: COLORS.ROMANCE_DARK
  },
  [COLOR_PROP.primary]: {
    normal: COLORS.MAGENTA,
    dark: COLORS.MAGENTA_DARK
  },
  [COLOR_PROP.secondary]: {
    normal: COLORS.ROSE,
    dark: COLORS.ROSE_DARK
  }
};

function getColors({ color, variant }) {
  let css = `
  background-color: ${variant === VARIANT_PROP.solid ? COLOR_MAP[color].normal : 'transparent'};
    &:hover {
        background-color: ${
          variant === VARIANT_PROP.solid
            ? COLOR_MAP[color].dark
            : color === COLOR_PROP.default
            ? COLOR_MAP[color].normal
            : rgba(COLOR_MAP[color].normal, 0.2)
        };
      }
  `;
  switch (color) {
    case COLOR_PROP.primary:
    case COLOR_PROP.secondary:
      return `
      ${css}
      color: ${variant !== VARIANT_PROP.solid ? COLOR_MAP[color].normal : COLORS.WHITE};
      border-color: ${variant === VARIANT_PROP.outline ? COLOR_MAP[color].normal : 'transparent'};
      `;
    default:
      return `
        ${css}
      color: ${COLORS.BASE};
      border-color: ${variant === VARIANT_PROP.outline ? COLOR_MAP[color].dark : 'transparent'};
      `;
  }
}

function getRounded({ rounded }) {
  return rounded ? `border-radius: ${ELEMENT.BORDER_RADIUS}` : '';
}

const ButtonStyled = styled.button`
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.BASE};
  padding: ${X} ${Y};
  position: relative;
  transition: background-color 0.3s;

  ${getColors};
  ${getRounded};

  &:focus {
    outline: none;
  }
`;

export default ButtonStyled;
