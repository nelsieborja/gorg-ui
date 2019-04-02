import { styled } from '@storybook/theming';
import { rem, math } from 'polished';

import { VARIANT_COLOR_MAP, ELEMENT, SPACINGS, TRANSITION } from '../../themes';

const tickGutter = rem(2);
const tickSize = math(`${ELEMENT.HEIGHT} - (${tickGutter} * 2)`);

function getGapCSS({ gap, direction = 'right' }) {
  return gap ? `margin-${direction}: ${SPACINGS.GUTTER};` : '';
}
const SwitchLabel = styled.label`
  height: ${ELEMENT.HEIGHT};
  width: ${rem(58)};

  border: 1px solid ${({ color }) => VARIANT_COLOR_MAP[color].normal};
  border-radius: ${ELEMENT.HEIGHT};
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color ${TRANSITION.DURATION};
  vertical-align: middle;

  ${getGapCSS}

  &:after {
    position: absolute;
    left: ${tickGutter};
    top: ${tickGutter};

    height: ${tickSize};
    width: ${tickSize};

    background-color: ${({ color }) => VARIANT_COLOR_MAP[color].normal};
    border-radius: ${tickSize};
    content: '';
    transition: ${TRANSITION.DURATION} ease;
  }

  &:active:after {
    width: ${rem(42)};
  }

  input:checked + & {
    background-color: ${({ color }) => VARIANT_COLOR_MAP[color].normal};

    &:after {
      background-color: ${({ color }) => VARIANT_COLOR_MAP[color].dark};
      left: calc(100% - ${tickGutter});
      transform: translateX(-100%);
    }
  }

  input:disabled + & {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default SwitchLabel;
