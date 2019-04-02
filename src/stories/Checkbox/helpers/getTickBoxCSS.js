import { rgba } from 'polished';
import { ELEMENT, SHAPE_VARIATION, SPACINGS, VARIANT_COLOR_MAP } from '../../themes';

function getTickBoxCSS({ color, shape, gap, direction = 'right' }) {
  const { normal } = VARIANT_COLOR_MAP[color];

  return `
    height: ${ELEMENT.TICK_SIZE};
    width: ${ELEMENT.TICK_SIZE};

    border: 2px solid ${normal};
    ${shape !== SHAPE_VARIATION.default ? `border-radius: ${ELEMENT.BORDER_RADIUS[shape]}` : ''};
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
