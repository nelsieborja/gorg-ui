import { styled } from '@storybook/theming';
import { rem } from 'polished';

import getShapeCSS from '../helpers/getShapeCSS';
import getLoaderFixCSS from '../helpers/getLoaderFixCSS';
import getLoadingCSS from '../helpers/getLoadingCSS';

import { FONTS, ELEMENT, TRANSITION } from '../../themes';

const { X, Y } = ELEMENT.PADDING;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid;
  cursor: pointer;
  font-size: ${FONTS.S.BASE};
  outline: none;
  padding: ${Y} ${X};
  position: relative;
  transition: ${TRANSITION.DURATION};

  ${getShapeCSS};
  ${getLoaderFixCSS};

  &:disabled {
    cursor: not-allowed;
    opacity: ${ELEMENT.DISABLED};
  }

  .-loader {
    position: absolute;
    left: ${Y};
    top: 50%;
    transform: translateY(-50%);

    height: ${rem(30)};
    width: ${rem(30)};
    display: none;
  }

  ${getLoadingCSS};
`;

export default Button;
