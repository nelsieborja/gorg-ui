import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLORS } from '../themes';

import ButtonStyled, { COLOR_PROP } from './ButtonStyled';

const COLOR_MAP = {
  [COLOR_PROP.default]: {
    borderColor: COLORS.ROMANCE_DARK,
    backgroundColorHover: COLORS.ROMANCE_DARK,
    color: COLORS.BASE
  },
  [COLOR_PROP.primary]: {
    borderColor: COLORS.MAGENTA,
    backgroundColorHover: rgba(COLORS.MAGENTA_DARK, 0.3),
    color: COLORS.MAGENTA
  },
  [COLOR_PROP.secondary]: {
    borderColor: COLORS.ROSE,
    backgroundColorHover: rgba(COLORS.ROSE_DARK, 0.3),
    color: COLORS.ROSE
  }
};

const ButtonOutlineStyled = styled(ButtonStyled)`
  border-color: ${({ color }) => COLOR_MAP[color].borderColor};
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_MAP[color].backgroundColorHover};
  }
`;

export default ButtonOutlineStyled;
