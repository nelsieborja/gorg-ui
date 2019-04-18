import { styled } from '@storybook/theming';

import getOutlineCSS, { getOutlineHoverCSS, getOutlineActiveCSS } from '../helpers/getOutlineCSS';

import Button from './Button';

const ButtonOutline = styled(Button)`
  ${getOutlineCSS}

  &:not(:disabled):hover {
    ${getOutlineHoverCSS}
  }

  &:not(:disabled):active {
    ${getOutlineActiveCSS}
  }
`;

export default ButtonOutline;
