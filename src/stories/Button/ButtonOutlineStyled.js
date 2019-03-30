import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIATION, COLORS } from '../themes';

import ButtonStyled from './ButtonStyled';

const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    borderColor: COLORS.ROMANCE_DARK,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    borderColor: COLORS.MAGENTA,
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.MAGENTA
  },
  [COLOR_VARIATION.secondary]: {
    borderColor: COLORS.ROSE,
    backgroundColorHover: COLORS.ROSE_DARK,
    color: COLORS.ROSE
  }
};

const ButtonOutlineStyled = styled(ButtonStyled)`
  border-color: ${({ color }) => COLOR_MAP[color].borderColor};
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => rgba(COLOR_MAP[color].backgroundColorHover, 0.3)};
  }
`;

export default ButtonOutlineStyled;
