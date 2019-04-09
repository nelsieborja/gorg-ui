import React from 'react';

import { ReactComponent as Plus } from '../../svgs/plus.svg';
import { ReactComponent as Minus } from '../../svgs/minus.svg';

import Header from './styled/Header';
import { default as ButtonStyled } from './styled/Button';

const Title = ({ active, children, color, onToggleExpansionPanel }) => (
  <Header active={active} color={color}>
    <ButtonStyled active={active} color={color} onClick={onToggleExpansionPanel}>
      {active ? <Minus className="-minus" /> : <Plus className="-plus" />}
    </ButtonStyled>
    <h2>{children}</h2>
  </Header>
);

export default Title;
