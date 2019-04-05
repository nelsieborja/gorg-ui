import { styled } from '@storybook/theming';
import { rem } from 'polished';

import getTickAnimation from '../helpers/getTickAnimation';
import getTickBoxCSS from '../helpers/getTickBoxCSS';
import { FONTS, TRANSITION, COLOR_VARIANTS_MAP } from '../../themes';

const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: ${FONTS.S.BASE};
`;

CheckboxLabel.Tick = styled.i`
  ${getTickBoxCSS};
  transition: background ${TRANSITION.DURATION};

  input:checked + & {
    background: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};

    &:before {
      top: ${rem(2)};
      left: ${rem(6)};

      height: ${rem(10)};
      width: ${rem(5)};

      animation: ${getTickAnimation} 0.2s;
      border: solid ${({ color }) => COLOR_VARIANTS_MAP[color].color};
      border-width: 0 2px 2px 0px;
      content: '';
      transform: rotateZ(45deg);
    }
  }
`;

export default CheckboxLabel;
