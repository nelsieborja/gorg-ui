import { styled } from '@storybook/theming';

import { ELEMENT, VARIANT_TYPES } from '../../themes';
import getContentColorCSS from '../helpers/getContentColorCSS';

import ButtonIconText from '../../ButtonIcon/styled/ButtonIconText';

const Button = styled(ButtonIconText)`
  background-color: transparent !important;
  margin: 0 ${ELEMENT.PADDING.Y};
  padding-left: 0;
  padding-right: 0;
  ${getContentColorCSS}

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

Button.defaultProps = {
  variant: VARIANT_TYPES.text
}

export default Button;
