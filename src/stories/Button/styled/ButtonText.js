import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIATION, VARIANT_COLOR_MAP } from '../../themes';

import Button from './Button';

const ButtonText = styled(Button)`
  border-color: transparent;
  color: ${({ color }) =>
    color === COLOR_VARIATION.default
      ? VARIANT_COLOR_MAP[color].color
      : VARIANT_COLOR_MAP[color].normal};

  &:not(:disabled):hover {
    background-color: ${({ color }) => rgba(VARIANT_COLOR_MAP[color].normal, 0.2)};
  }

  &:not(:disabled):active {
    color: ${({ color }) => VARIANT_COLOR_MAP[color].colorActive};
    background: ${({ color }) => rgba(VARIANT_COLOR_MAP[color].normal, 0.4)};
  }
`;

export default ButtonText;
