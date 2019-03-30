import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, SHAPE_VARIATION, SPACINGS } from '../themes';

import Container from '../_/Container';
import Checkbox from '.';

const CustomContainer = styled(Container)`
  label {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIATION);
const shapePropsKeys = Object.keys(SHAPE_VARIATION);

const buildColorStories = color => (
  <Fragment>
    {shapePropsKeys.map(key => {
      const shape = SHAPE_VARIATION[key];
      return (
        <Checkbox
          key={key}
          color={select('color', COLOR_VARIATION, color)}
          defaultChecked
          shape={shape}
        />
      );
    })}
  </Fragment>
);

const buildShapeStories = shape => (
  <Fragment>
    {colorPropsKeys.map(key => {
      const color = COLOR_VARIATION[key];
      return (
        <Checkbox
          key={key}
          color={color}
          defaultChecked
          shape={select('shape', SHAPE_VARIATION, shape)}
        />
      );
    })}
  </Fragment>
);

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <Checkbox
      color={select('color', COLOR_VARIATION, COLOR_VARIATION.default)}
      defaultChecked
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
  .add('Uncontrolled', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Checkbox key={key} color={color} defaultChecked={boolean('defaultChecked', true)} />
        );
      })}
    </Fragment>
  ))
  .add('Controlled', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return <Checkbox key={key} color={color} checked={boolean('checked', false)} />;
      })}
    </Fragment>
  ));
