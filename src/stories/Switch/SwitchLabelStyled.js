import { styled } from '@storybook/theming';
import { rem, math } from 'polished';

import { COLOR_VARIATION, ELEMENT, COLORS, TRANSITION } from '../themes';

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
  width: ${rem(54)};

  background-color: ${COLORS.LIGHT_GREY};
  border-radius: ${ELEMENT.HEIGHT};
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color ${TRANSITION.DURATION};

  &:after {
    position: absolute;
    left: ${tickGutter};
    top: ${tickGutter};

    height: ${tickSize};
    width: ${tickSize};

    background-color: ${({ color }) => COLOR_MAP[color].handle};
    border-radius: ${tickSize};
    content: '';
    transition: 0.2s ease;
  }

  &:active:after {
    width: ${rem(40)};
  }

  input:checked + & {
    background-color: ${({ color }) => COLOR_MAP[color].checked};

    &:after {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

export default SwitchLabelStyled;
