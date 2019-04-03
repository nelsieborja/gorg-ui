import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, SPACINGS } from '../themes';

import Container from '../_/Container';
import Radio from '.';

const onChange = action('changed');

const colorPropsKeys = Object.keys(COLOR_VARIATION);

const buildColorStories = () =>
  colorPropsKeys.map(key => (
    <Radio key={key} color={COLOR_VARIATION[key]} name="radio" onChange={onChange} />
  ));

const CustomContainer = styled(Container)`
  label {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;
storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <Radio color={select('color', COLOR_VARIATION, COLOR_VARIATION.default)} onChange={onChange}>
      Change my appearance from <strong>"Knobs"</strong> tab
    </Radio>
  ));

storiesOf('Radio.Color', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildColorStories());
