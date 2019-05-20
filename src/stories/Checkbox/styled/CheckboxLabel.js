import { styled } from '@storybook/theming';
import { rem } from 'polished';

import { FONTS, COLOR_VARIANTS_MAP, TRANSITION } from '../../themes';
import getTickBoxCSS from '../helpers/getTickBoxCSS';
import getTickAnimation from '../../Checkbox/helpers/getTickAnimation';

const tickSize = rem(3);

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  font-size: ${FONTS.S.BASE};
`;

CheckboxLabel.Tick = styled.i`
  ${getTickBoxCSS};

  input:checked + & {
    background: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};

    &:before {
      top: ${rem(1)};
      left: ${rem(6)};

      height: ${rem(14)};
      width: ${rem(8)};

      animation: ${getTickAnimation} ${TRANSITION.DURATION};
      border: solid ${({ color }) => COLOR_VARIANTS_MAP[color].color};
      border-width: 0 ${tickSize} ${tickSize} 0px;
      transform: rotateZ(45deg);
    }
  }
`;

export default CheckboxLabel;
