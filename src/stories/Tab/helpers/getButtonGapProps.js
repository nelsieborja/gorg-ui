/**
 * Generates `gap` props only if necessary
 * @param {String|Object} label
 */
function getButtonGapProps(label) {
  if (!label.props || !label.props.children) return {};

  return {
    gap: true,
    gapPosition: label.props.children[0].type ? 'right' : 'left'
  };
}

export default getButtonGapProps;
