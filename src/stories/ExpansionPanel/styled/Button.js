import { styled } from '@storybook/theming';

import scale3dCSS, { plusAnimation, minusAnimation } from '../helpers/getAnimationCSS';
import { SPECIAL_BUTTON_MAP, TRANSITION } from '../../themes';

import ButtonIconText from '../../ButtonIcon/styled/ButtonIconText';

const Button = styled(ButtonIconText)`
  background-color: transparent !important;

  svg {
    transform: ${scale3dCSS};

    path,
    circle {
      fill: ${({ active, color }) => SPECIAL_BUTTON_MAP.normal(active ? color : null)};
    }

    &.-plus {
      animation: ${plusAnimation} ${TRANSITION.DURATION};
    }

    &.-minus {
      animation: ${minusAnimation} ${TRANSITION.DURATION};
    }
  }

  &:not(:disabled):active {
    svg {
      path,
      circle {
        fill: ${SPECIAL_BUTTON_MAP.active};
      }
    }
  }
`;

export default Button;
