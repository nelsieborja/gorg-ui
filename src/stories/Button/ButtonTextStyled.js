import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLORS } from '../themes';

import ButtonStyled, { COLOR_PROP } from './ButtonStyled';

const COLOR_MAP = {
  [COLOR_PROP.default]: {
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_PROP.primary]: {
    backgroundColorHover: rgba(COLORS.MAGENTA_DARK, 0.3),
    color: COLORS.MAGENTA
  },
  [COLOR_PROP.secondary]: {
    backgroundColorHover: rgba(COLORS.ROSE_DARK, 0.3),
    color: COLORS.ROSE
  }
};

const ButtonTextStyled = styled(ButtonStyled)`
  background-color: transparent;
  border-color: transparent;
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_MAP[color].backgroundColorHover};
  }
`;

export default ButtonTextStyled;
