import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { VARIANT_COLOR_MAP } from '../../themes';
import { getIconColorCSS, getIconColorActiveCSS } from '../helpers/getIconCSS';

import ButtonIcon from './ButtonIcon';

const ButtonIconOutline = styled(ButtonIcon)`
  border-color: ${({ color }) => VARIANT_COLOR_MAP[color].normal};
  ${getIconColorCSS}

  &:not(:disabled):hover {
    box-shadow: 0 0 0 1px inset ${({ color }) => rgba(VARIANT_COLOR_MAP[color].normal, 0.8)};
  }

  &:not(:disabled):active {
    background: ${({ color }) => rgba(VARIANT_COLOR_MAP[color].normal, 0.2)};
    box-shadow: 0 0 0 2px inset ${({ color }) => rgba(VARIANT_COLOR_MAP[color].normal, 0.8)};
    ${getIconColorActiveCSS}
  }
`;

export default ButtonIconOutline;
