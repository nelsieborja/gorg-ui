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
  color: string,
  value: number
};

Tab.defaultProps = {
  alignment: 'left', // ALIGNMENTS
  color: COLOR_VARIANTS.default, // COLOR_VARIANTS
  value: 0
};

export default Tab;
