import { styled } from '@storybook/theming';

import getWidthCSS from '../../Button/helpers/getWidthCSS';
import getShapeCSS from '../../Button/helpers/getShapeCSS';
import getIconCSS from '../helpers/getIconCSS';

import { FONTS, ELEMENT, TRANSITION } from '../../themes';

const ButtonIcon = styled.button`
  display: ${({ fullWidth }) => (!fullWidth ? 'inline-' : '')}flex;
  align-items: center;

  background-color: transparent;
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.S.BASE};
  outline: none;
  padding: ${ELEMENT.PADDING.Y};
  position: relative;
  transition: ${TRANSITION.DURATION}, color 0s;

  ${getWidthCSS};
  ${getShapeCSS};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${getIconCSS};
`;

export default ButtonIcon;
