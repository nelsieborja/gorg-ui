import React, { Children } from 'react';

import { default as HeaderStyled } from './styled/Header';
import Button from './Button';

const Header = ({ activeTab, alignment, barStyle, children, color, ...rest }) => {
  return (
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
};

export default Header;
