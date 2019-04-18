import { rgba } from 'polished';

import { COLOR_VARIANTS_MAP } from '../../themes';

/**
 * Generates CSS for buttons with `solid` variant
 *  @param {Object} { color: Enum[COLOR_VARIANTS] }
 */
function getSolidCSS({ color }) {
  return `
    background-color: ${COLOR_VARIANTS_MAP[color].normal};
    border-color: transparent;
    color: ${COLOR_VARIANTS_MAP[color].color};
  `
}

export default getSolidCSS;

export function getSolidHoverCSS({ color }) {
  return `background-color: ${COLOR_VARIANTS_MAP[color].dark};`
}

export function getSolidActiveCSS({ color }) {
  return `box-shadow: 0 1px 10px 2px ${rgba(COLOR_VARIANTS_MAP[color].dark, 0.6)};`
}