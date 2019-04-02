import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIATION, COLORS } from '../../themes';

import Button from './Button';

const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE_LIGHT,
    colorActive: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.MAGENTA,
    colorActive: COLORS.MAGENTA_DARK
  },
  [COLOR_VARIATION.secondary]: {
    backgroundColorHover: COLORS.ROSE_DARK,
    color: COLORS.ROSE,
    colorActive: COLORS.ROSE_DARK
  }
};

const ButtonText = styled(Button)`
  border-color: transparent;
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => rgba(COLOR_MAP[color].backgroundColorHover, 0.3)};
  }

  &:not(:disabled):active {
    color: ${({ color }) => COLOR_MAP[color].colorActive};
    background: ${({ color }) => rgba(COLOR_MAP[color].backgroundColorHover, 0.4)};
  }
`;

export default ButtonText;
