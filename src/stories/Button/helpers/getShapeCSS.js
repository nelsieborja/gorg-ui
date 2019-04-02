import { ELEMENT, SHAPE_VARIATION } from '../../themes';

/**
 * Generates CSS border-radius based on the provided `shape` and only if necessary
 * @param {JSON} { shape: Enum(SHAPE_VARIATION) }
 */
function getShapeCSS({ shape }) {
  return shape !== SHAPE_VARIATION.default && `border-radius: ${ELEMENT.BORDER_RADIUS[shape]}`;
}

export default getShapeCSS;
