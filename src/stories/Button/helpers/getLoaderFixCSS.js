import { COLOR_VARIATION, VARIANT_TYPE, COLORS } from '../../themes';

/**
 * Generates corresponding Loader CSS fix for a given `color` and `variant`
 * @param {JSON} { color: Enum(COLOR_VARIATION), variant: Enum(VARIANT_TYPE) }
 */
function getLoaderFixCSS({ color, variant }) {
  if (variant === VARIANT_TYPE.default) return;

  switch (color) {
    case COLOR_VARIATION.primary:
      return `._loader circle:nth-of-type(4) {
        fill: ${COLORS.MAGENTA_DARK};
      }`;
    case COLOR_VARIATION.secondary:
      return `._loader circle:nth-of-type(3) {
        fill: ${COLORS.ROSE_DARK};
      }`;
    default:
      return `._loader circle:nth-of-type(5) {
        fill: ${COLORS.WHITE};
      }`;
  }
}

export default getLoaderFixCSS;
