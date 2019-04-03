import { COLOR_VARIANTS, VARIANT_TYPES, COLORS } from '../../themes';

/**
 * Generates corresponding Loader CSS fix for a given `color` and `variant`
 * @param {JSON} { color: Enum(COLOR_VARIANTS), variant: Enum(VARIANT_TYPES) }
 */
function getLoaderFixCSS({ color, variant }) {
  if (variant === VARIANT_TYPES.default) return;

  switch (color) {
    case COLOR_VARIANTS.primary:
      return `._loader circle:nth-of-type(4) {
        fill: ${COLORS.MAGENTA_DARK};
      }`;
    case COLOR_VARIANTS.secondary:
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
