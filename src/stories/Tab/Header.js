import React, { Children } from 'react';
import { array, string, number, object, oneOfType } from 'prop-types';

import { default as HeaderStyled } from './styled/Header';
import Button from './Button';

const Header = ({ activeTab, alignment, barStyle, children, color, ...rest }) => (
  <HeaderStyled alignment={alignment} color={color}>
    {Children.map(children, ({ props }, index) => (
      <Button
        active={activeTab === index}
        alignment={alignment}
        color={color}
        index={index}
        {...props}
        {...rest}
      />
    ))}
    <HeaderStyled.Bar color={color} style={barStyle} />
  </HeaderStyled>
);

Header.propTypes = {
  activeTab: number.isRequired,
  alignment: string.isRequired,
  barStyle: object.isRequired,
  children: oneOfType([array, object, string]).isRequired,
  color: string.isRequired
};

export default Header;
