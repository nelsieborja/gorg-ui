import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP, ELEMENT, SHAPE_VARIANTS } from '../../themes';
import getGapCSS from '../../Switch/helpers/getGapCSS';

/**
 * Sets CSS for the Checkbox tick (generic)
 * @param {Object} { color: Enum[COLOR_VARIANTS], shape: Enum[SHAPE_VARIANTS], gap: Boolean, direction}
 */
function getTickBoxCSS({ color, shape, gap, gapPosition }) {
  const { normal } = COLOR_VARIANTS_MAP[color];

  return `
    height: ${ELEMENT.TICK_SIZE};
    width: ${ELEMENT.TICK_SIZE};

    border: 2px solid ${normal};
    ${shape !== SHAPE_VARIANTS.default ? `border-radius: ${ELEMENT.BORDER_RADIUS[shape]}` : ''};
    ${getGapCSS({ gap, gapPosition })}
    position: relative;

    input:not(:disabled) + &:hover {
      box-shadow: 0 0 2px 2px inset ${rgba(normal, 0.3)}
    }

    input:checked + & {
      &:before {
        content: '';
        position: absolute;
      }
    }

    input:disabled + & {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;
}

export default getTickBoxCSS;
