import { styled, keyframes } from '@storybook/theming';
import { rem } from 'polished';

import { COLOR_VARIATION, COLORS, FONTS, TRANSITION, getGap, getShapeCSS } from '../../themes';

const size = rem(22);

const tickZoomIn = keyframes`
  0% {
    transform: scale3d(0, 0, 0) rotateZ(45deg);
  }
  30% {
    transform: scale3d(1.3, 1.3, 1.3) rotateZ(45deg);
  }
  100% {
      transform: scale3d(1, 1, 1) rotateZ(45deg);
  }
`;

export const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    borderColor: COLORS.ROMANCE_DARK,
    tickColor: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    borderColor: COLORS.MAGENTA,
    tickColor: COLORS.WHITE
  },
  [COLOR_VARIATION.secondary]: {
    borderColor: COLORS.ROSE,
    tickColor: COLORS.WHITE
  }
};

const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: ${FONTS.BASE};
  position: relative;

  &:before {
    height: ${size};
    width: ${size};

    border: 1px solid ${({ color }) => COLOR_MAP[color].borderColor};
    content: '';
    display: inline-block;
    transition: background-color ${TRANSITION.DURATION};
    vertical-align: text-top;

    ${getGap};
    ${getShapeCSS};
  }

  input:checked + & {
    &:before {
      background: ${({ color }) => COLOR_MAP[color].borderColor};
    }

    &:after {
      position: absolute;
      top: ${rem(4)};
      left: ${rem(8)};

      height: ${rem(10)};
      width: ${rem(5)};

      animation: ${tickZoomIn} ${TRANSITION.DURATION};
      border: solid ${({ color }) => COLOR_MAP[color].tickColor};
      border-width: 0 2px 2px 0px;
      content: '';
      transform: rotateZ(45deg);
    }
  }

  input:disabled + & {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default CheckboxLabel;
