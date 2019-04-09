import { styled } from '@storybook/theming';

import { ELEMENT } from '../../themes';
import getContentColorCSS, { getContentColorActiveCSS } from '../helpers/getContentColorCSS';

import ButtonIconText from '../../ButtonIcon/styled/ButtonIconText';

const Button = styled(ButtonIconText)`
  background-color: transparent !important;
  ${getContentColorCSS}
  margin: 0 ${ELEMENT.PADDING.X};
  padding-left: 0;
  padding-right: 0;

  ${getContentColorActiveCSS}

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export default Button;
