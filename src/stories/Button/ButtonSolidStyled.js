import { styled } from '@storybook/theming';

import { COLORS } from '../themes';

import ButtonStyled, { COLOR_PROP } from './ButtonStyled';

const COLOR_MAP = {
  [COLOR_PROP.default]: {
    backgroundColor: COLORS.ROMANCE,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_PROP.primary]: {
    backgroundColor: COLORS.MAGENTA,
    backgroundColorHover: COLORS.MAGENTA_DARK,
    color: COLORS.WHITE
  },
  [COLOR_PROP.secondary]: {
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
