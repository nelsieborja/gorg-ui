import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP } from '../../themes';

import Button from './Button';

const ButtonSolid = styled(Button)`
  background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  border-color: transparent;
  color: ${({ color }) => COLOR_VARIANTS_MAP[color].color};

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].dark};
  }

  &:not(:disabled):active {
    box-shadow: 0 1px 10px 2px ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].dark, 0.6)};
  }
`;

export default ButtonSolid;
