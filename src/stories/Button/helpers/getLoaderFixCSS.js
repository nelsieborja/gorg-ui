import { COLOR_VARIANTS, VARIANT_TYPES, COLORS } from '../../themes';
import isObject from '../../../helpers/isObject';

/**
 * Generates corresponding Loader CSS fix for a given `color` and `variant`
 * @param {Object} { color: Enum[COLOR_VARIANTS], variant: Enum[VARIANT_TYPES] }
 */
function getLoaderFixCSS(props) {
  if (!isObject(props)) return;

  const { color, variant } = props;
  if (variant === VARIANT_TYPES.default) return;

  switch (color) {
    case COLOR_VARIANTS.primary:
      return `.-loader circle:nth-of-type(2) {
        fill: ${COLORS.PRIMARY_DARK};
      }`;
    case COLOR_VARIANTS.secondary:
      return `.-loader circle:nth-of-type(3) {
        fill: ${COLORS.SECONDARY_DARK};
      }`;
    default:
      return `.-loader circle:nth-of-type(5) {
        fill: ${COLORS.DEFAULT_DARK};
      }`;
  }
}

export default getLoaderFixCSS;
