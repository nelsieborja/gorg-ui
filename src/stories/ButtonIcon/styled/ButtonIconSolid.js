import { styled } from '@storybook/theming';

import { getIconColorCSS } from '../helpers/getIconCSS';
import getSolidCSS, { getSolidHoverCSS, getSolidActiveCSS } from '../../Button/helpers/getSolidCSS';

import ButtonIcon from './ButtonIcon';

const ButtonSolid = styled(ButtonIcon)`
  ${getSolidCSS}
  ${getIconColorCSS}

  &:not(:disabled):hover {
    ${getSolidHoverCSS}
  }

  &:not(:disabled):active {
    ${getSolidActiveCSS}
  }
`;

export default ButtonSolid;
