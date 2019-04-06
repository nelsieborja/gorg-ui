import { styled } from '@storybook/theming';
import { rem } from 'polished';

import { COLOR_VARIANTS_MAP, SHAPE_VARIANTS } from '../../themes';
import CheckboxLabel from '../../Checkbox/styled/CheckboxLabel';
import getTickBoxCSS from '../../Checkbox/helpers/getTickBoxCSS';
import getTickAnimation from '../../Checkbox/helpers/getTickAnimation';

const RadioLabel = styled(CheckboxLabel)``;

RadioLabel.Tick = styled.i`
  ${getTickBoxCSS};

  input:checked + & {
    &:before {
      top: ${rem(3)};
      left: ${rem(3)};

      animation: ${getTickAnimation} 0.2s;
      background: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
      border-radius: 50%;
      padding: ${rem(7)};
    }
  }
`;

RadioLabel.Tick.defaultProps = {
  shape: SHAPE_VARIANTS.circle
};

export default RadioLabel;
