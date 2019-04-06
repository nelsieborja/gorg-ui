import { ELEMENT, SHAPE_VARIANTS } from '../../themes';

/**
 * Generates CSS border-radius based on the provided `shape` and only if necessary
 * @param {Object} { shape: Enum[SHAPE_VARIANTS] }
 */
function getShapeCSS({ shape }) {
  return shape !== SHAPE_VARIANTS.default && `border-radius: ${ELEMENT.BORDER_RADIUS[shape]}`;
}

export default getShapeCSS;
