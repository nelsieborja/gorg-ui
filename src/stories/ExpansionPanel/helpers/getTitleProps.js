/**
 * Generates specific props for Title component only if necessary
 * @param {Boolean} isTitleComp
 * @param {Object} onToggleExpansionPanel
 */
function getTitleProps(isTitleComp, onToggleExpansionPanel) {
  return isTitleComp ? { onToggleExpansionPanel } : {};
}

export default getTitleProps;
