import { rgba } from 'polished';

import { COLOR_VARIANTS, COLOR_VARIANTS_MAP } from '../../themes';

/**
 * Generates CSS for buttons with `outline` variant
 *  @param {Object} { color: Enum[COLOR_VARIANTS] }
 */
function getOutlineCSS({ color }) {
  return `
    border-color: ${COLOR_VARIANTS_MAP[color].normal};
    color: ${color === COLOR_VARIANTS.default
      ? COLOR_VARIANTS_MAP[color].color
      : COLOR_VARIANTS_MAP[color].normal};
  `
}

export default getOutlineCSS;

export function getOutlineHoverCSS({ color }) {
  return `box-shadow: 0 0 0 1px inset ${rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};`
}

export function getOutlineActiveCSS({ color }) {
  return `
    color: ${COLOR_VARIANTS_MAP[color].colorActive};
    background: ${rgba(COLOR_VARIANTS_MAP[color].normal, 0.2)};
    box-shadow: 0 0 0 2px inset ${rgba(COLOR_VARIANTS_MAP[color].normal, 0.8)};
  `
}