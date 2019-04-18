import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

import { ALIGNMENTS, COLOR_VARIANTS } from '../themes';
import { ReactComponent as Home } from '../../svgs/home.svg';

import Container from '../_/Container';
import Tab from '.';

const alignmentKeys = Object.keys(ALIGNMENTS);

const TabButton = (
  <>
    <Home />
    With Icon
  </>
);

storiesOf('Tab', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Live Props', () => (
    <Tab
      alignment={select('alignment', alignmentKeys, ALIGNMENTS.left)}
      color={select('color', COLOR_VARIANTS, COLOR_VARIANTS.default)}
      value={select('value', [0, 1, 2], 0)}
    >
      <Tab.Content label={TabButton}>
        Change my appearance from <strong>"Knobs"</strong> tab
      </Tab.Content>

      <Tab.Content label={text('label (Tab 1)','Tab 1')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Tab.Content>

      <Tab.Content label={text('label (Tab 2)','Tab 2')}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Tab.Content>
    </Tab>
  ));

storiesOf('Tab.Alignment', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Left', () => (
    <Tab>
      <Tab.Content label='Tab Label'>
        Left tab label content
      </Tab.Content>
    </Tab>
  ))
  .add('Center', () => (
    <Tab alignment="center">
      <Tab.Content label='Tab Label'>
        Center tab label content
      </Tab.Content>
    </Tab>
  ))
  .add('Right', () => (
    <Tab alignment="right">
      <Tab.Content label='Tab Label'>
        Right tab label content
      </Tab.Content>
    </Tab>
  ))
