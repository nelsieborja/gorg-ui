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

function getIconFillHover(color, variant) {
  switch (variant) {
    case VARIANT_TYPE.outline:
      return VARIANT_COLOR_MAP[color].colorActive;

    case VARIANT_TYPE.text:
      return VARIANT_COLOR_MAP[color].colorActive;

    default:
      return '';
  }
}

export function getIconColorCSS({ color, variant }) {
  return `
    svg path {
      fill: ${getIconFill(color, variant)};
    };
  `;
}

export function getIconColorActiveCSS({ color, variant }) {
  return `
      svg path {
      fill: ${getIconFillHover(color, variant)};
    };
  `;
}
