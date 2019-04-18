import { styled } from '@storybook/theming';

import getSolidCSS, { getSolidHoverCSS, getSolidActiveCSS } from '../helpers/getSolidCSS';

import Button from './Button';

const ButtonSolid = styled(Button)`
  ${getSolidCSS}

  &:not(:disabled):hover {
    ${getSolidHoverCSS}
  }

  &:not(:disabled):active {
    ${getSolidActiveCSS}
  }
`;

export default ButtonSolid;
