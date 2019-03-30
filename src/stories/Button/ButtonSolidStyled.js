import { styled } from '@storybook/theming';

import { COLOR_VARIATION, COLORS } from '../themes';

import ButtonStyled from './ButtonStyled';

export const COLOR_MAP = {
  [COLOR_VARIATION.default]: {
    backgroundColor: COLORS.ROMANCE,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_VARIATION.primary]: {
    backgroundColor: COLORS.MAGENTA,
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.WHITE
  },
  [COLOR_VARIATION.secondary]: {
    backgroundColor: COLORS.ROSE,
    backgroundColorHover: COLORS.ROSE_DARK,
    color: COLORS.WHITE
  }
};

const ButtonSolidStyled = styled(ButtonStyled)`
  background-color: ${({ color }) => COLOR_MAP[color].backgroundColor};
  border-color: transparent;
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_MAP[color].backgroundColorHover};
  }
`;

export default ButtonSolidStyled;
