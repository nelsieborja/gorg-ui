import React from 'react';

import { ReactComponent as Plus } from '../../svgs/plus.svg';
import ButtonIcon from '../ButtonIcon';
import Header from './styled/Header';

const Title = ({ children, onToggleExpansionPanel }) => (
  <Header>
    <h2>{children}</h2>
    <ButtonIcon shape="circle" variant="text" onClick={onToggleExpansionPanel}>
      <Plus />
    </ButtonIcon>
  </Header>
);

export default Title;
