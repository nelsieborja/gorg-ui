import { styled } from '@storybook/theming';

import { FONTS, ELEMENT } from '../themes';

const { X, Y } = ELEMENT.PADDING;

export const COLOR_PROP = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};
export const VARIANT_PROP = {
  solid: 'solid',
  outline: 'outline',
  text: 'text'
};

const getRoundedCSS = ({ rounded }) => {
  return rounded ? `border-radius: ${ELEMENT.BORDER_RADIUS}` : '';
};

const ButtonStyled = styled.button`
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.BASE};
  padding: ${X} ${Y};
  position: relative;
  transition: background-color 0.3s;

  ${getRoundedCSS};

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default ButtonStyled;
