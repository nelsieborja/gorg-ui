import { COLOR_VARIATION, ELEMENT, VARIANT_COLOR_MAP, VARIANT_TYPE } from '../../themes';

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
 * @param {Enum} color (default|primary|secondary)
 * @param {Enum} variant default|outline|text
 */
function getIconFill(color, variant) {
  switch (variant) {
    case VARIANT_TYPE.outline:
      return color === COLOR_VARIATION.default
        ? VARIANT_COLOR_MAP[color].color
        : VARIANT_COLOR_MAP[color].normal;

    case VARIANT_TYPE.text:
      return color === COLOR_VARIATION.default
        ? VARIANT_COLOR_MAP[color].color
        : VARIANT_COLOR_MAP[color].normal;

    default:
      return VARIANT_COLOR_MAP[color].color;
  }
}

/**
 * Extracts which color to use for the SVG when Button is on `active` state
 * based on the provided ``variant
 * @param {Enum} color (default|primary|secondary)
 * @param {Enum} variant default|outline|text
 */
function getIconFillActive(color, variant) {
  switch (variant) {
    case VARIANT_TYPE.outline:
      return VARIANT_COLOR_MAP[color].colorActive;

    case VARIANT_TYPE.text:
      return VARIANT_COLOR_MAP[color].colorActive;

    default:
      return '';
  }
}

/**
 * Sets the SVG CSS fill attr value
 * @param {JSON} { color: Enum(default|primary|secondary), variant: Enum(default|outline|text) }
 */
export function getIconColorCSS({ color, variant }) {
  return `
    svg path {
      fill: ${getIconFill(color, variant)};
    };
  `;
}

/**
 * Sets the SVG CSS fill attr value when button is on `active` state
 * @param {JSON} { color: Enum(default|primary|secondary), variant: Enum(default|outline|text) }
 */
export function getIconColorActiveCSS({ color, variant }) {
  return `
      svg path {
      fill: ${getIconFillActive(color, variant)};
    };
  `;
}
