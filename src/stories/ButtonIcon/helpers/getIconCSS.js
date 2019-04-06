import { COLOR_VARIANTS, ELEMENT, COLOR_VARIANTS_MAP, VARIANT_TYPES } from '../../themes';

/**
 * Sets height/width of the SVGs within a Button component
 */
function getIconCSS() {
  const { HEIGHT, WIDTH } = ELEMENT.ICON.DIMENSION;
  return `
    svg {
      height: ${HEIGHT};
      width: ${WIDTH};
    }
  `;
}

export default getIconCSS;

/**
 * Extracts which color to use for the SVG based on the provided `variant`
 * @param {Enum} color [COLOR_VARIANTS]
 * @param {Enum} variant [VARIANT_TYPES]
 */
function getIconFill(color, variant) {
  switch (variant) {
    case VARIANT_TYPES.outline:
      return color === COLOR_VARIANTS.default
        ? COLOR_VARIANTS_MAP[color].color
        : COLOR_VARIANTS_MAP[color].normal;

    case VARIANT_TYPES.text:
      return color === COLOR_VARIANTS.default
        ? COLOR_VARIANTS_MAP[color].color
        : COLOR_VARIANTS_MAP[color].normal;

    default:
      return COLOR_VARIANTS_MAP[color].color;
  }
}

/**
 * Extracts which color to use for the SVG when Button is on `active` state
 * based on the provided ``variant
 * @param {Enum} color [COLOR_VARIANTS]
 * @param {Enum} variant [VARIANT_TYPES]
 */
function getIconFillActive(color, variant) {
  switch (variant) {
    case VARIANT_TYPES.outline:
      return COLOR_VARIANTS_MAP[color].colorActive;

    case VARIANT_TYPES.text:
      return COLOR_VARIANTS_MAP[color].colorActive;

    default:
      return '';
  }
}

/**
 * Sets the SVG CSS fill attr value
 * @param {Object} { color: Enum[COLOR_VARIANTS], variant: Enum[VARIANT_TYPES] }
 */
export function getIconColorCSS({ color, variant }) {
  return `
    svg {
      path, circle {
        fill: ${getIconFill(color, variant)};
      }
    };
  `;
}

/**
 * Sets the SVG CSS fill attr value when button is on `active` state
 * @param {Object} { color: Enum[COLOR_VARIANTS], variant: Enum[VARIANT_TYPES] }
 */
export function getIconColorActiveCSS({ color, variant }) {
  return `
      svg {
        path, circle {
        fill: ${getIconFillActive(color, variant)};
      }
    };
  `;
}
