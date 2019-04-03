import { styled } from '@storybook/theming';
import { rem } from 'polished';

import { VARIANT_COLOR_MAP, FONTS, SHAPE_VARIATION } from '../../themes';
import getTickBoxCSS from '../../Checkbox/helpers/getTickBoxCSS';
import getTickAnimation from '../../Checkbox/helpers/getTickAnimation';

const RadioLabel = styled.label`
  cursor: pointer;
  font-size: ${FONTS.BASE};
`;

RadioLabel.Tick = styled.i`
  ${getTickBoxCSS};

  input:checked + & {
    &:before {
      top: ${rem(3)};
      left: ${rem(3)};

      animation: ${getTickAnimation} 0.2s;
      background: ${({ color }) => VARIANT_COLOR_MAP[color].normal};
      border-radius: 50%;
      padding: ${rem(7)};
    }
  }
`;

RadioLabel.Tick.defaultProps = {
  shape: SHAPE_VARIATION.circle
};

export default RadioLabel;
