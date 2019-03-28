import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

// Builds out the shape of the task the component expects
export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updateAt: new Date(2019, 2, 25, 0, 0)
};

// Bundles up the actions into a single `actions` variable
export const actions = {
  // `actions` creates callback that appears in the `actions` panel of the Storybook UI when clicked
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

// Initiates Storybook by calling `storiesOf()` function to register the component
// 'Task' will be its name that appears on the sidebar in the Storybook app
storiesOf('Task', module)
  // Uses `withKnobs`
  .addDecorator(withKnobs)
  // Defines stories by calling `add()` once for each of the test states to generate a story
  // Integrates the `object` knob type within the "default" story
  .add('default', () => <Task task={object('task', { ...task })} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)
  .add('long title', () => <Task task={{ ...task, title: longTitle }} {...actions} />);
