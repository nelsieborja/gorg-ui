import React from 'react';
import { number, string } from 'prop-types';

import { COLOR_VARIANTS } from '../themes';
import getTabContents from './helpers/getTabContents';

import useActive from './hooks/useActive';

import Header from './Header';
import Content from './Content';

const Tab = ({ alignment, children, color, value }) => {
  const state = useActive(value);

  return (
    <>
      <Header alignment={alignment} children={children} color={color} {...state} />
      {getTabContents({ activeTab: state.activeTab, children, color })}
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
