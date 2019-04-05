import { styled } from '@storybook/theming';

import { FONTS, COLORS, ELEMENT, TRANSITION } from '../../themes';
import scale3dCSS, { plusAnimation, minusAnimation } from '../helpers/getAnimationCSS';

const Header = styled.header`
  display: flex;
  align-items: center;

  background: ${COLORS.DEFAULT};
  padding-left: ${ELEMENT.PADDING.Y};

  h2 {
    flex: 1;
    font-size: ${FONTS.S.BASE};
    font-weight: ${FONTS.W.SEMIBOLD};
  }

  svg {
    transform: ${scale3dCSS};

    &.-plus {
      animation: ${plusAnimation} ${TRANSITION.DURATION};
    }

    &.-minus {
      animation: ${minusAnimation} ${TRANSITION.DURATION};
    }
  }
`;

export default Header;
