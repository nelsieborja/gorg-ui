import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import Button from './stories/Button';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Button>I'm a default button!</Button>
        <Button color="primary">I'm a primary button!</Button>
        <Button color="secondary">I'm a secondary button!</Button>
      </Provider>
    );
  }
}

export default App;
