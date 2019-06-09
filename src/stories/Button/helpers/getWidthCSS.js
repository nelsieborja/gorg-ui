/**
 * Generates CSS property - "width:100%" only if provided "fullWidth" is set to "true"
 *  @param {Object} { fullWidth: Boolean }
 */
function getWidthCSS({ fullWidth }) {
  if (!fullWidth) return;

  return 'width: 100%;';
}

export default getWidthCSS;
