// Story configuration setup
import { configure } from '@storybook/react';
// Uses babel macro to ensure `re.context` runs in Jest
import requireContext from 'require-context.macro';

// Uses CSS file
import '../src/stories/base.css';

// By default Storybook looks for stories in a `/stories` directory,
// this configures to notice `.stories.js` files instead
// const req = require.context('../src', true, /.stories.js$/);
// Uses `requireContext` imported from the macro, required by the StoryShots addon for automated testing
// const req = requireContext('../src/components', true, /\.stories\.js$/);
const req = requireContext('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  // require('../src/stories');
  // Alphabetical sort: https://github.com/storybooks/storybook/issues/548
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
