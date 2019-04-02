import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_MAP, COLOR_VARIATION } from '../../themes';

import Button from './Button';

const ButtonSolid = styled(Button)`
  background-color: ${({ color }) => COLOR_MAP[color].backgroundColor};
  border-color: transparent;
  color: ${({ color }) => COLOR_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_MAP[color].backgroundColorHover};
  }

  &:active {
    box-shadow: 0 1px 10px 2px
      ${({ color }) =>
        rgba(
          COLOR_MAP[color][
            color === COLOR_VARIATION.default ? 'backgroundColorHover' : 'backgroundColor'
          ],
          0.6
        )};
  }
`;

export default ButtonSolid;
