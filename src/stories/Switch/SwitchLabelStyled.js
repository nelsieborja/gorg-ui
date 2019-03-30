import { styled } from '@storybook/theming';
import { rem, math } from 'polished';

import { COLOR_VARIATION, COLORS, ELEMENT, TRANSITION, getGap } from '../themes';

const tickGutter = rem(2);
const tickSize = math(`${ELEMENT.HEIGHT} - (${tickGutter} * 2)`);

const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    handle: COLORS.ROMANCE_DARK,
    checked: COLORS.ROMANCE
  },
  [COLOR_VARIATION.primary]: {
    handle: COLORS.MAGENTA_DARK,
    checked: COLORS.MAGENTA
  },
  [COLOR_VARIATION.secondary]: {
    handle: COLORS.ROSE_DARK,
    checked: COLORS.ROSE
  }
};

const SwitchLabelStyled = styled.label`
  height: ${ELEMENT.HEIGHT};
  width: ${rem(58)};

  background-color: ${COLORS.LIGHT_GREY};
  border-radius: ${ELEMENT.HEIGHT};
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color ${TRANSITION.DURATION};
  vertical-align: middle;

  ${getGap};

  &:after {
    position: absolute;
    left: ${tickGutter};
    top: ${tickGutter};

    height: ${tickSize};
    width: ${tickSize};

    background-color: ${({ color }) => COLOR_MAP[color].checked};
    border-radius: ${tickSize};
    content: '';
    transition: ${TRANSITION.DURATION} ease;
  }

  &:active:after {
    width: ${rem(42)};
  }

  input:checked + & {
    background-color: ${({ color }) => COLOR_MAP[color].checked};

    &:after {
      background-color: ${({ color }) => COLOR_MAP[color].handle};
      left: calc(100% - ${tickGutter});
      transform: translateX(-100%);
    }
  }
`;

export default SwitchLabelStyled;
