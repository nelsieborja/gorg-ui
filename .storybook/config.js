import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

// Uses babel macro to ensure `require.context` runs in Jest
// const req = require.context('../src', true, /.stories.js$/);
const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
