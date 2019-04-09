import { styled } from '@storybook/theming';
import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP, VARIANT_TYPES } from '../../themes';
import { getIconColorCSS } from '../helpers/getIconCSS';

import ButtonIcon from './ButtonIcon';

const ButtonSolid = styled(ButtonIcon)`
  background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  border-color: transparent;
  ${getIconColorCSS}

  &:not(:disabled):hover {
    background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].dark};
  }

  &:not(:disabled):active {
    box-shadow: 0 1px 10px 2px ${({ color }) => rgba(COLOR_VARIANTS_MAP[color].dark, 0.6)};
  }
`;

ButtonSolid.defaultProps = {
  variant: VARIANT_TYPES.default
};

export default ButtonSolid;
