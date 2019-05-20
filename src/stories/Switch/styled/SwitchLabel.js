import { styled } from '@storybook/theming';
import { rem, math } from 'polished';

import { COLOR_VARIANTS_MAP, ELEMENT, TRANSITION } from '../../themes';
import getGapCSS from '../helpers/getGapCSS';

import CheckboxLabel from '../../Checkbox/styled/CheckboxLabel';

const tickGutter = rem(2);
const tickSize = math(`${ELEMENT.HEIGHT} - (${tickGutter} * 3)`);

const SwitchLabel = styled(CheckboxLabel)``;

SwitchLabel.Tick = styled.i`
  height: ${ELEMENT.HEIGHT};
  width: ${rem(58)};

  border: 1px solid ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  border-radius: ${ELEMENT.HEIGHT};
  cursor: pointer;
  ${getGapCSS}
  position: relative;
  transition: background-color ${TRANSITION.DURATION};

  &:after {
    position: absolute;
    left: ${tickGutter};
    top: ${tickGutter};

    height: ${tickSize};
    width: ${tickSize};

    background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
    border-radius: ${tickSize};
    content: '';
    transition: ${TRANSITION.DURATION} ease;
  }

  &:active:after {
    width: ${rem(42)};
  }

  input:checked + & {
    background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].normal};

    &:after {
      background-color: ${({ color }) => COLOR_VARIANTS_MAP[color].dark};
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
