import { styled } from '@storybook/theming';

import { getIconColorCSS, getIconColorActiveCSS } from '../helpers/getIconCSS';
import getTextCSS, { getTextHoverCSS, getTextActiveCSS } from '../../Button/helpers/getTextCSS';

import Button from './ButtonIcon';

const ButtonText = styled(Button)`
  ${getTextCSS}
  ${getIconColorCSS}

  &:not(:disabled):hover {
    ${getTextHoverCSS}
  }

  &:not(:disabled):active {
    ${getTextActiveCSS}
    ${getIconColorActiveCSS}
  }
`;

export default ButtonText;
