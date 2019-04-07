import { rem, rgba } from 'polished';

import { COLOR_VARIANTS_MAP } from '../../themes';

export const borderWidth = rem(3);

/**
 * Sets the border based on the provided `color`
 * @param {Object} { color: Enum(COLOR_VARIANTS), ... }
 */
function getBorderCSS({ color }) {
  return `border-bottom: ${borderWidth} solid ${rgba(COLOR_VARIANTS_MAP[color].normal, 0.4)};`;
}

export default getBorderCSS;
