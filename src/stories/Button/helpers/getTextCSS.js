import { COLOR_VARIANTS, COLOR_VARIANTS_MAP } from '../../themes';

/**
 * Generates CSS for buttons with `text` variant
 *  @param {Object} { color: Enum[COLOR_VARIANTS] }
 */
function getTextCSS({ color }) {
  return `
    border-color: transparent;
    color: ${color === COLOR_VARIANTS.default
      ? COLOR_VARIANTS_MAP[color].color
      : COLOR_VARIANTS_MAP[color].normal};
  `
}

export default getTextCSS;

export function getTextHoverCSS({ color }) {
  return `background-color: ${COLOR_VARIANTS_MAP[color].hover};`;
}

export function getTextActiveCSS({ color }) {
  return `
    color: ${COLOR_VARIANTS_MAP[color].colorActive};
    background-color: ${COLOR_VARIANTS_MAP[color].active};
  `;
}