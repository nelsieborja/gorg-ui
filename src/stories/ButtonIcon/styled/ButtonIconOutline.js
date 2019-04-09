import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP, VARIANT_TYPES } from '../../themes';
import { getIconColorCSS, getIconColorActiveCSS } from '../helpers/getIconCSS';

import ButtonIcon from './ButtonIcon';

const ButtonIconOutline = styled(ButtonIcon)`
  border-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  ${getIconColorCSS}

  &:not(:disabled):hover {
    box-shadow: 0 0 0 1px inset ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};
  }

  &:not(:disabled):active {
    background: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.2)};
    box-shadow: 0 0 0 2px inset ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};
    ${getIconColorActiveCSS}
  }
`;

ButtonIconOutline.defaultProps = {
  variant: VARIANT_TYPES.outline
};

export default ButtonIconOutline;
