import { styled } from '@storybook/theming';
import { math } from 'polished';

import {
  COLOR_VARIATION,
  VARIANT_TYPE,
  COLORS,
  FONTS,
  ELEMENT,
  TRANSITION,
  getShapeCSS
} from '../../themes';
import { rem } from 'polished';

const { X, Y } = ELEMENT.PADDING;

const getLoaderFixCSS = ({ color, variant }) => {
  if (variant === VARIANT_TYPE.default) return;

  if (color === COLOR_VARIATION.default) {
    return `._loader circle:nth-of-type(5) {
      fill: ${COLORS.WHITE};
    }`;
  }
  if (color === COLOR_VARIATION.primary) {
    return `._loader circle:nth-of-type(4) {
      fill: ${COLORS.MAGENTA_DARK};
    }`;
  }
  if (color === COLOR_VARIATION.secondary) {
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

const Button = styled.button`
  background-color: transparent;
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.BASE};
  padding: ${X} ${Y};
  position: relative;
  transition: background-color ${TRANSITION.DURATION}, padding ${TRANSITION.DURATION};

  ${getShapeCSS};
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

export default Button;
