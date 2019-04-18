import { styled } from '@storybook/theming';

import getTextCSS, { getTextHoverCSS, getTextActiveCSS } from '../helpers/getTextCSS';

import Button from './Button';

const ButtonText = styled(Button)`
  ${getTextCSS}

  &:not(:disabled):hover {
    ${getTextHoverCSS}
  }

  &:not(:disabled):active {
    ${getTextActiveCSS}
  }
`;

export default ButtonText;
