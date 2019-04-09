import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP, VARIANT_TYPES } from '../../themes';
import { getIconColorCSS, getIconColorActiveCSS } from '../helpers/getIconCSS';

import Button from './ButtonIcon';

const ButtonText = styled(Button)`
  border-color: transparent;
  ${getIconColorCSS}

  &:not(:disabled):hover {
    background-color: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.2)};
  }

  &:not(:disabled):active {
    ${getIconColorActiveCSS}
    background: ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].normal, 0.4)};
  }
`;

ButtonText.defaultProps = {
  variant: VARIANT_TYPES.text
};

export default ButtonText;
