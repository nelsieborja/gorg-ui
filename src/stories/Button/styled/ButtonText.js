import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS, COLOR_VARIANTS_MAP } from '../../themes';

import Button from './Button';

const ButtonText = styled(Button)`
  border-color: transparent;
  color: ${({ color }) =>
    color === COLOR_VARIANTS.default
      ? COLOR_VARIANTS_MAP[color].color
      : COLOR_VARIANTS_MAP[color].normal};

  &:not(:disabled):hover {
    background-color: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.2)};
  }

  &:not(:disabled):active {
    color: ${({ color }) => COLOR_VARIANTS_MAP[color].colorActive};
    background: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.4)};
  }
`;

export default ButtonText;
