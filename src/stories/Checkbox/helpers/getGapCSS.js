import { SPACINGS } from '../../themes';

/**
 * Generates CSS margin property based on the provided `direction` and only if necessary
 * @param {JSON} { gap: Boolean, direction: Enum (left|right|top|bottom) }
 */
function getGapCSS({ gap, direction = 'right' }) {
  return gap && `margin-${direction}: ${SPACINGS.GUTTER}`;
}

export default getGapCSS;
