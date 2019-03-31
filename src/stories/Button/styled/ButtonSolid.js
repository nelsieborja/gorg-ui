import { styled } from '@storybook/theming';

import { COLOR_MAP } from '../../themes';

import Button from './Button';

const ButtonSolid = styled(Button)`
  background-color: ${({ color }) => COLOR_MAP[color].backgroundColor};
  border-color: transparent;
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_MAP[color].backgroundColorHover};
  }
`;

export default ButtonSolid;
