import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { VARIANT_COLOR_MAP } from '../../themes';
import { getIconColorCSS } from '../helpers/getIconCSS';

import ButtonIcon from './ButtonIcon';

const ButtonSolid = styled(ButtonIcon)`
  background-color: ${({ color }) => VARIANT_COLOR_MAP[color].normal};
  border-color: transparent;
  ${getIconColorCSS}

  &:not(:disabled):hover {
    background-color: ${({ color }) => VARIANT_COLOR_MAP[color].dark};
  }

  &:not(:disabled):active {
    box-shadow: 0 1px 10px 2px ${({ color }) => rgba(VARIANT_COLOR_MAP[color].dark, 0.6)};
  }
`;

export default ButtonSolid;
