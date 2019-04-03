import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIANTS, SHAPE_VARIANTS, SPACINGS } from '../themes';

import Container from '../_/Container';
import Checkbox from '.';

const onChange = action('changed');

const CustomContainer = styled(Container)`
  label {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIANTS);
const shapePropsKeys = Object.keys(SHAPE_VARIANTS);

const buildColorStories = color =>
  shapePropsKeys.map(key => {
    const shape = SHAPE_VARIANTS[key];
    return (
      <Checkbox
        key={key}
        color={select('color', COLOR_VARIANTS, color)}
        defaultChecked
        onChange={onChange}
        shape={shape}
      />
    );
  });

const buildShapeStories = shape =>
  colorPropsKeys.map(key => {
    const color = COLOR_VARIANTS[key];
    return (
      <Checkbox
        key={key}
        color={color}
        defaultChecked
        disabled={boolean('disabled', false)}
        onChange={onChange}
        shape={select('shape', SHAPE_VARIANTS, shape)}
      />
    );
  });

const buildDynamicPropStories = props =>
  colorPropsKeys.map(key => (
    <Checkbox key={key} color={COLOR_VARIANTS[key]} onChange={onChange} {...props} />
  ));

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <Checkbox
      color={select('color', COLOR_VARIANTS, COLOR_VARIANTS.default)}
      onChange={onChange}
      shape={select('shape', SHAPE_VARIANTS, SHAPE_VARIANTS.default)}
    >
      Change my appearance from <strong>"Knobs"</strong> tab
    </Checkbox>
  ));

storiesOf('Checkbox.Color', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildColorStories(COLOR_VARIANTS.default))
  .add('Primary', () => buildColorStories(COLOR_VARIANTS.primary))
  .add('Secondary', () => buildColorStories(COLOR_VARIANTS.secondary));

storiesOf('Checkbox.Shape', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildShapeStories(SHAPE_VARIANTS.default))
  .add('Rounded', () => buildShapeStories(SHAPE_VARIANTS.rounded))
  .add('Circle', () => buildShapeStories(SHAPE_VARIANTS.circle));

storiesOf('Checkbox.State', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Controlled', () => buildDynamicPropStories({ checked: boolean('checked', false) }))
  .add('Uncontrolled', () =>
    buildDynamicPropStories({ defaultChecked: boolean('defaultChecked', true) })
  )
  .add('Disabled', () => buildDynamicPropStories({ disabled: boolean('disabled', true) }));
