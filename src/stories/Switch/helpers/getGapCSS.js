import { SPACINGS } from '../../themes';

/**
 * Adds `margin` based on the provided `gapPosition` only if necessary
 * @param {Object} { gap: Boolean, gapPosition: Enum[left|right] }
 */
function getGapCSS({ gap, gapPosition = 'right' }) {
  return gap ? `margin-${gapPosition}: ${SPACINGS.GUTTER};` : '';
}

export default getGapCSS;
