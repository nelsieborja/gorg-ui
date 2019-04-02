import React from 'react';
import ReactDOM from 'react-dom';

import Button from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { shape: 'cirlce', loading: true };
  ReactDOM.render(<Button {...props} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
