import React, { useState, useEffect } from 'react';
import { number, string } from 'prop-types';

import { COLOR_VARIANTS } from '../themes';
import getTabContents from './helpers/getTabContents';

import Header from './Header';
import Content from './Content';

const Tab = ({ alignment, children, color, value }) => {
  const [activeTab, setActiveTab] = useState(value);
  const [barStyle, setBarStyle] = useState({});

  useEffect(() => setActiveTab(value), [value]);

  function onTaButtonClick(target, index) {
    const { offsetLeft, offsetWidth } = target;

    setActiveTab(index);
    setBarStyle({
      left: offsetLeft,
      width: offsetWidth
    });
  }

  const state = {
    activeTab,
    barStyle,
    onTaButtonClick
  };

  return (
    <>
      <Header alignment={alignment} children={children} color={color} {...state} />
      {getTabContents({ activeTab, children, color })}
    </>
  );
};

Tab.Content = Content;
Tab.Content.displayName = 'Content';

Tab.propTypes = {
  alignment: string,
  value: number,
  color: string
};

Tab.defaultProps = {
  alignment: 'left', // ALIGNMENTS
  value: 0,
  color: COLOR_VARIANTS.default // COLOR_VARIANTS
};

export default Tab;
