import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Container from '../_/Container';
import ExpansionPanel from '.';

storiesOf('Expansion Panel', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Live Props', () => (
    <>
      <ExpansionPanel active={boolean('active', true)}>
        <ExpansionPanel.Title>Expansion Title</ExpansionPanel.Title>
        <ExpansionPanel.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </>
  ))
  .add('Multi Expansion Panel', () =>
    [...Array(3)].map((item, index) => (
      <ExpansionPanel key={`expansionpanel-${index}`} active={index % 2 !== 0}>
        <ExpansionPanel.Title>Expansion Title</ExpansionPanel.Title>
        <ExpansionPanel.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ExpansionPanel.Content>
      </ExpansionPanel>
    ))
  );
