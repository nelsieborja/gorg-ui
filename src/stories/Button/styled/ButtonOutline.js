import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS, COLOR_VARIANTS_MAP } from '../../themes';

import Button from './Button';

const ButtonOutline = styled(Button)`
  border-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  color: ${({ color }) =>
    color === COLOR_VARIANTS.default
      ? COLOR_VARIANTS_MAP[color].color
      : COLOR_VARIANTS_MAP[color].normal};

  &:not(:disabled):hover {
    box-shadow: 0 0 0 1px inset ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};
  }

  &:not(:disabled):active {
    color: ${({ color }) => COLOR_VARIANTS_MAP[color].colorActive};
    background: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.2)};
    box-shadow: 0 0 0 2px inset ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};
  }
`;

export default ButtonOutline;
