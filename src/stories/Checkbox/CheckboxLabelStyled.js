import { styled, keyframes } from '@storybook/theming';
import { rem } from 'polished';

import { COLOR_MAP, FONTS, SPACINGS, TRANSITION, getShapeCSS } from '../themes';

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

const getGap = ({ gap }) => gap && `margin-right: ${SPACINGS.GUTTER}`;

const CheckboxLabelStyled = styled.label`
  cursor: pointer;
  font-size: ${FONTS.BASE};
  position: relative;

  &:before {
    height: ${size};
    width: ${size};

    background-color: ${({ color }) => COLOR_MAP[color].backgroundColor};
    content: '';
    display: inline-block;
    vertical-align: text-top;

    ${getGap};
    ${getShapeCSS};
  }

  input:checked + & {
    &:after {
      position: absolute;
      top: ${rem(3)};
      left: ${rem(7)};

      height: 10px;
      width: 5px;

      animation: ${tickZoomIn} ${TRANSITION.DURATION};
      border: solid ${({ color }) => COLOR_MAP[color].color};
      border-width: 0 2px 2px 0px;
      content: '';
      transform: rotateZ(45deg);
    }
  }
`;

export default CheckboxLabelStyled;
