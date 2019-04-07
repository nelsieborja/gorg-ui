import { SPACINGS } from '../../themes';

/**
 * Adds `margin` based on the provided `direction` only if necessary
 * @param {Object} { gap: Boolean, direction: Enum[left|right|top|bottom] }
 */
function getGapCSS({ gap, direction = 'right' }) {
  return gap ? `margin-${direction}: ${SPACINGS.GUTTER};` : '';
}

 export default getGapCSS;