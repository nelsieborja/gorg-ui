import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, SHAPE_VARIATION, VARIANT_TYPE, SPACINGS } from '../themes';

import Container from '../_/Container';
import Button from '.';

const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorVariationKeys = Object.keys(COLOR_VARIATION);
const variantTypeKeys = Object.keys(VARIANT_TYPE);

const buildVariantStories = (variant, rest) => (
  <Fragment>
    {colorVariationKeys.map(key => {
      const color = COLOR_VARIATION[key];
      return (
        <Button
          key={key}
          color={color}
          variant={select('variant', VARIANT_TYPE, variant)}
          {...rest}
        >
          {color.toUpperCase()}
        </Button>
      );
    })}
  </Fragment>
);
const buildShapeStories = shape => (
  <Fragment>
    {colorVariationKeys.map(key => {
      const color = COLOR_VARIATION[key];
      return (
        <Button key={key} color={color} shape={select('shape', SHAPE_VARIATION, shape)}>
          {color.toUpperCase()}
        </Button>
      );
    })}
  </Fragment>
);
const buildColorStories = color => (
  <Fragment>
    {variantTypeKeys.map(key => {
      const variant = VARIANT_TYPE[key];
      return (
        <Button key={key} variant={variant} color={select('color', COLOR_VARIATION, color)}>
          {variant.toUpperCase()}
        </Button>
      );
    })}
  </Fragment>
);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => (
    <Button
      color={select('color', COLOR_VARIATION, COLOR_VARIATION.default)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      shape={select('shape', SHAPE_VARIATION, SHAPE_VARIATION.default)}
      variant={select('variant', VARIANT_TYPE, VARIANT_TYPE.default)}
    >
      CHANGE MY APPEARANCE FROM "Knobs" TAB
    </Button>
  ));

storiesOf('Button.Variant', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildVariantStories(VARIANT_TYPE.default))
  .add('Outline', () => buildVariantStories(VARIANT_TYPE.outline))
  .add('Text', () => buildVariantStories(VARIANT_TYPE.text));

storiesOf('Button.Shape', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildShapeStories(SHAPE_VARIATION.default))
  .add('Rounded', () => buildShapeStories(SHAPE_VARIATION.rounded))
  .add('Circle', () => buildShapeStories(SHAPE_VARIATION.circle));

storiesOf('Button.Color', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildColorStories(COLOR_VARIATION.default))
  .add('Primary', () => buildColorStories(COLOR_VARIATION.primary))
  .add('Secondary', () => buildColorStories(COLOR_VARIATION.secondary));

storiesOf('Button.State', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Loading', () => (
    <Fragment>
      {buildVariantStories(VARIANT_TYPE.default, {
        disabled: boolean('disabled', false),
        loading: boolean('loading', true)
      })}
      <br />
      {buildVariantStories(VARIANT_TYPE.outline, {
        disabled: boolean('disabled', false),
        loading: boolean('loading', true)
      })}
      <br />
      {buildVariantStories(VARIANT_TYPE.text, {
        disabled: boolean('disabled', false),
        loading: boolean('loading', true)
      })}
    </Fragment>
  ))
  .add('Disabled', () => (
    <Fragment>
      {buildVariantStories(VARIANT_TYPE.default, {
        disabled: boolean('disabled', true),
        loading: boolean('loading', false)
      })}
      <br />
      {buildVariantStories(VARIANT_TYPE.outline, {
        disabled: boolean('disabled', true),
        loading: boolean('loading', false)
      })}
      <br />
      {buildVariantStories(VARIANT_TYPE.text, {
        disabled: boolean('disabled', true),
        loading: boolean('loading', false)
      })}
    </Fragment>
  ));
