import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, SHAPE_VARIATION, SPACINGS } from '../themes';

import Container from '../_/Container';
import Checkbox from '.';

const onChange = action('changed');

const CustomContainer = styled(Container)`
  label {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIATION);
const shapePropsKeys = Object.keys(SHAPE_VARIATION);

const buildColorStories = color =>
  shapePropsKeys.map(key => {
    const shape = SHAPE_VARIATION[key];
    return (
      <Checkbox
        key={key}
        color={select('color', COLOR_VARIATION, color)}
        defaultChecked
        onChange={onChange}
        shape={shape}
      />
    );
  });

const buildShapeStories = shape =>
  colorPropsKeys.map(key => {
    const color = COLOR_VARIATION[key];
    return (
      <Checkbox
        key={key}
        color={color}
        defaultChecked
        disabled={boolean('disabled', false)}
        onChange={onChange}
        shape={select('shape', SHAPE_VARIATION, shape)}
      />
    );
  });

const buildDynamicPropStories = props =>
  colorPropsKeys.map(key => (
    <Checkbox key={key} color={COLOR_VARIATION[key]} onChange={onChange} {...props} />
  ));

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <Checkbox
      color={select('color', COLOR_VARIATION, COLOR_VARIATION.default)}
      onChange={onChange}
      shape={select('shape', SHAPE_VARIATION, SHAPE_VARIATION.default)}
    >
      Change my appearance from <strong>"Knobs"</strong> tab
    </Checkbox>
  ));

storiesOf('Checkbox.Color', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildColorStories(COLOR_VARIATION.default))
  .add('Primary', () => buildColorStories(COLOR_VARIATION.primary))
  .add('Secondary', () => buildColorStories(COLOR_VARIATION.secondary));

storiesOf('Checkbox.Shape', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildShapeStories(SHAPE_VARIATION.default))
  .add('Rounded', () => buildShapeStories(SHAPE_VARIATION.rounded))
  .add('Circle', () => buildShapeStories(SHAPE_VARIATION.circle));

storiesOf('Checkbox.State', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Controlled', () => buildDynamicPropStories({ checked: boolean('checked', false) }))
  .add('Uncontrolled', () =>
    buildDynamicPropStories({ defaultChecked: boolean('defaultChecked', true) })
  )
  .add('Disabled', () => buildDynamicPropStories({ disabled: boolean('disabled', true) }));
