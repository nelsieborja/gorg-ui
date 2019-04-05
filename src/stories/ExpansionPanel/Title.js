import React from 'react';

import { ReactComponent as Plus } from '../../svgs/plus.svg';
import { ReactComponent as Minus } from '../../svgs/minus.svg';
import ButtonIcon from '../ButtonIcon';
import Header from './styled/Header';

const Title = ({ active, children, onToggleExpansionPanel }) => (
  <Header>
    <h2>{children}</h2>
    <ButtonIcon shape="circle" variant="text" onClick={onToggleExpansionPanel}>
      {active ? <Minus /> : <Plus />}
    </ButtonIcon>
  </Header>
);

export default Title;
