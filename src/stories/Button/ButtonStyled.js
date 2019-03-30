import { styled } from '@storybook/theming';
import { math } from 'polished';

import { COLORS, FONTS, ELEMENT } from '../themes';
import { rem } from 'polished';

const { X, Y } = ELEMENT.PADDING;

export const COLOR_PROP = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};
export const VARIANT_PROP = {
  solid: 'solid',
  outline: 'outline',
  text: 'text'
};

const getRoundedCSS = ({ rounded }) => rounded && `border-radius: ${ELEMENT.BORDER_RADIUS}`;

const getLoaderFixCSS = ({ color, variant }) => {
  if (variant === VARIANT_PROP.solid) return;

  if (color === COLOR_PROP.default) {
    return `._loader circle:nth-of-type(5) {
      fill: ${COLORS.WHITE};
    }`;
  }
  if (color === COLOR_PROP.primary) {
    return `._loader circle:nth-of-type(4) {
      fill: ${COLORS.MAGENTA_DARK};
    }`;
  }
  if (color === COLOR_PROP.secondary) {
    return `._loader circle:nth-of-type(3) {
      fill: ${COLORS.ROSE_DARK};
    }`;
  }
};

const getLoadingCSS = ({ disabled, loading }) =>
  !disabled &&
  loading &&
  `
  padding-left: ${math(`(${Y} * 2) + ${X}`)};
  ._loader {
    display: block;
  }
  `;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.BASE};
  padding: ${X} ${Y};
  position: relative;
  transition: background-color 0.3s, padding 0.3s;

  ${getRoundedCSS};
  ${getLoaderFixCSS};

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ._loader {
    position: absolute;
    left: ${X};
    top: 50%;
    transform: translateY(-50%);

    height: ${rem(30)};
    width: ${rem(30)};
    display: none;
  }

  ${getLoadingCSS};
`;

export default ButtonStyled;
