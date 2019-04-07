import React, { Children, useRef } from 'react';
import { bool } from 'prop-types';

import useActive from './hooks/useActive';
import useContentHeight from './hooks/useContentHeight';
import getTitleProps from './helpers/getTitleProps';
import getContentProps from './helpers/getContentProps';

import Title from './Title';
import Content from './Content';

const ExpansionPanel = ({ active: initialActive, children }) => {
  const contentEl = useRef();
  const { active, onToggleExpansionPanel } = useActive(initialActive);
  const contentHeight = useContentHeight(active, contentEl);

  return Children.map(children, ({ type: Child, props }) => (
    <Child
      key={Child.displayName}
      active={active}
      {...getTitleProps(Child === Title, onToggleExpansionPanel)}
      {...getContentProps(Child === Content, contentEl, contentHeight)}
      {...props}
    />
  ));
};

ExpansionPanel.Title = Title;
ExpansionPanel.Title.displayName = 'Title';

ExpansionPanel.Content = Content;
ExpansionPanel.Content.displayName = 'Content';

ExpansionPanel.propTypes = {
  active: bool
};

ExpansionPanel.defaultProps = {
  active: false
};

export default ExpansionPanel;
