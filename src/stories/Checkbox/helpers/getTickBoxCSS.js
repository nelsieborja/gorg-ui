import { rgba } from 'polished';
import { ELEMENT, SHAPE_VARIANTS, SPACINGS, COLOR_VARIANTS_MAP } from '../../themes';

/**
 * Sets CSS for the Checkbox tick (generic)
 * @param {Object} { color: Enum[COLOR_VARIANTS], shape: Enum[SHAPE_VARIANTS], gap: Boolean, direction}
 */
function getTickBoxCSS({ color, shape, gap, direction = 'right' }) {
  const { normal } = COLOR_VARIANTS_MAP[color];

  return `
    height: ${ELEMENT.TICK_SIZE};
    width: ${ELEMENT.TICK_SIZE};

    border: 2px solid ${normal};
    ${shape !== SHAPE_VARIANTS.default ? `border-radius: ${ELEMENT.BORDER_RADIUS[shape]}` : ''};
    display: inline-block;
    ${gap ? `margin-${direction}: ${SPACINGS.GUTTER}` : ''};
    position: relative;
    vertical-align: middle;

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
