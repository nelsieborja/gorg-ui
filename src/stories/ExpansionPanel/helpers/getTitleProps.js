/**
 * Generates specific props for Title component only if necessary
 * @param {Boolean} isTitleComp
 * @param {Object} onToggleExpansionPanel
 */
function getTitleProps(isTitleComp, color, onToggleExpansionPanel) {
  return isTitleComp ? { onToggleExpansionPanel, color } : {};
}

export default getTitleProps;
