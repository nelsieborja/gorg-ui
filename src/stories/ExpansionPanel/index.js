import React, { Children, useRef } from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIANTS } from '../themes';
import getTitleProps from './helpers/getTitleProps';
import getContentProps from './helpers/getContentProps';

import useActive from './hooks/useActive';
import useContentHeight from './hooks/useContentHeight';

import Title from './Title';
import Content from './Content';

const ExpansionPanel = ({ active: initialActive, children, color }) => {
  const contentEl = useRef();
  const { active, onToggleExpansionPanel } = useActive(initialActive);
  const contentHeight = useContentHeight(active, contentEl);

  return Children.map(children, ({ type: Child, props }) => (
    <Child
      key={Child.displayName}
      active={active}
      {...getTitleProps(Child === Title, color, onToggleExpansionPanel)}
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
  active: bool,
  color: string
};

ExpansionPanel.defaultProps = {
  active: false,
  color: COLOR_VARIANTS.default // COLOR_VARIANTS
};

export default ExpansionPanel;
