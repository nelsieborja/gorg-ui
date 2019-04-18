import React from 'react';

import isExisty from '../../../helpers/isExisty';

/**
 * Generates `gap` props only if necessary
 * @param {String|Object} label
 */
function getButtonGapProps(children) {
  // https://stackoverflow.com/questions/52315508/reactjs-children-filter-out-null-values
  if (React.Children.toArray(children).filter(child => isExisty(child)).length < 2) return {};

  const firstChildProps = children[0].props;
  return {
    gap: true,
    gapPosition: firstChildProps && !firstChildProps.children ? 'right' : 'left'
  };
}

export default getButtonGapProps;
