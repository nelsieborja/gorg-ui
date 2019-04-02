import { styled } from '@storybook/theming';
import { rgba, rem } from 'polished';

import { COLOR_VARIATION, COLORS } from '../../themes';

import Button from './Button';

const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    borderColor: COLORS.ROMANCE_DARK,
    color: COLORS.BASE_LIGHT,
    colorActive: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    borderColor: COLORS.MAGENTA,
    color: COLORS.MAGENTA,
    colorActive: COLORS.MAGENTA_DARK
  },
  [COLOR_VARIATION.secondary]: {
    borderColor: COLORS.ROSE,
    color: COLORS.ROSE,
    colorActive: COLORS.ROSE_DARK
  }
};

const ButtonOutline = styled(Button)`
  border-color: ${({ color }) => COLOR_MAP[color].borderColor};
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    box-shadow: 0 0 0 1px inset ${({ color }) => rgba(COLOR_MAP[color].borderColor, 0.8)};
  }

  &:not(:disabled):active {
    color: ${({ color }) => COLOR_MAP[color].colorActive};
    background: ${({ color }) => rgba(COLOR_MAP[color].borderColor, 0.2)};
    box-shadow: 0 0 0 2px inset ${({ color }) => rgba(COLOR_MAP[color].borderColor, 0.8)};
  }
`;

export default ButtonOutline;
