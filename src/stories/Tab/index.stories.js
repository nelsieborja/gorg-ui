import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

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
      value={select('value', [0, 1], 0)}
    >
      <Tab.Content label={TabButton}>
        Change my appearance from <strong>"Knobs"</strong> tab
      </Tab.Content>

      <Tab.Content label="Plain Tab">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Tab.Content>
    </Tab>
  ));
