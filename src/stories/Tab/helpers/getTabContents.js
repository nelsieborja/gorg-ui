import React, { Children } from 'react';

/**
 * Generates Content components by cloning each child from the `chilren` prop
 * @param {Object} { activeTab: Number, children: Array, color[COLOR_VARIANTS] }
 */
function getTabContents({ activeTab, children, color }) {
  return Children.map(children, ({ type: Child, props }, index) => (
    <Child key={Child.displayName} active={activeTab === index} color={color} {...props} />
  ));
}

export default getTabContents;
