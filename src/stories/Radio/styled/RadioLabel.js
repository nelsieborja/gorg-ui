import { styled } from '@storybook/theming';
import { rem } from 'polished';

import { COLOR_VARIANTS_MAP, SHAPE_VARIANTS, TRANSITION } from '../../themes';
import CheckboxLabel from '../../Checkbox/styled/CheckboxLabel';
import getTickBoxCSS from '../../Checkbox/helpers/getTickBoxCSS';
import getTickAnimation from '../../Checkbox/helpers/getTickAnimation';

const tickSize = rem(5);

const RadioLabel = styled(CheckboxLabel)``;

RadioLabel.Tick = styled.i`
  ${getTickBoxCSS};

  input:checked + & {
    background: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};

    &:before {
      top: ${tickSize};
      left: ${tickSize};

      animation: ${getTickAnimation} ${TRANSITION.DURATION};
      background: ${({ color }) => COLOR_VARIANTS_MAP[color].color};
      border-radius: 50%;
      padding: ${tickSize};
    }
  }
`;

RadioLabel.Tick.defaultProps = {
  shape: SHAPE_VARIANTS.circle
};

export default RadioLabel;
