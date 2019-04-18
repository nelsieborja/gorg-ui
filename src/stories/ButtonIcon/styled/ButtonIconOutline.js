import { styled } from '@storybook/theming';

import { getIconColorCSS, getIconColorActiveCSS } from '../helpers/getIconCSS';
import getOutlineCSS, { getOutlineHoverCSS, getOutlineActiveCSS } from '../../Button/helpers/getOutlineCSS';

import ButtonIcon from './ButtonIcon';

const ButtonIconOutline = styled(ButtonIcon)`
  ${getOutlineCSS}
  ${getIconColorCSS}

  &:not(:disabled):hover {
    ${getOutlineHoverCSS}
  }

  &:not(:disabled):active {
    ${getOutlineActiveCSS}
    ${getIconColorActiveCSS}
  }
`;

export default ButtonIconOutline;
