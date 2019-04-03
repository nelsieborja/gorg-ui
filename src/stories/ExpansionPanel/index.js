import React, { Children, useState } from 'react';
import { bool } from 'prop-types';

import Title from './Title';
import Content from './Content';

const ExpansionPanel = ({ children }) => {
  const [active, setActive] = useState();

  function onToggleExpansionPanel() {
    setActive(!active);
  }

  return Children.map(children, child => (
    <child.type
      key={child.type.displayName}
      active={active}
      onToggleExpansionPanel={onToggleExpansionPanel}
      {...child.props}
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
