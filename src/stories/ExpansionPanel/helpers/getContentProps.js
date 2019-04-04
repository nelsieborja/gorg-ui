/**
 * Generates specific props for Content component only if necessary
 * @param {Boolean} isContentComp
 * @param {Object} ref
 * @param {Object} contentHeight
 */
function getContentProps(isContentComp, ref, contentHeight) {
  return isContentComp ? { ref, ...contentHeight } : {};
}

export default getContentProps;
