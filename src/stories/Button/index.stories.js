import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIANTS, SHAPE_VARIANTS, VARIANT_TYPES, SPACINGS } from '../themes';

import Container from '../_/Container';
import Button from '.';

const onClick = action('clicked');

const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorVariationKeys = Object.keys(COLOR_VARIANTS);
const variantTypeKeys = Object.keys(VARIANT_TYPES);

const buildVariantStories = (variant, rest) =>
  colorVariationKeys.map(key => {
    const color = COLOR_VARIANTS[key];
    return (
      <Button
        key={key}
        color={color}
        onClick={onClick}
        variant={select('variant', VARIANT_TYPES, variant)}
        {...rest}
      >
        {color.toUpperCase()}
      </Button>
    );
  });
const buildShapeStories = (shape, rest) =>
  colorVariationKeys.map(key => {
    const color = COLOR_VARIANTS[key];
    return (
      <Button
        key={key}
        color={color}
        onClick={onClick}
        shape={select('shape', SHAPE_VARIANTS, shape)}
        {...rest}
      >
        {color.toUpperCase()}
      </Button>
    );
  });
const buildColorStories = color =>
  variantTypeKeys.map(key => {
    const variant = VARIANT_TYPES[key];
    return (
      <Button
        key={key}
        color={select('color', COLOR_VARIANTS, color)}
        onClick={onClick}
        variant={variant}
      >
        {variant.toUpperCase()}
      </Button>
    );
  });

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <Button
      color={select('color', COLOR_VARIANTS, COLOR_VARIANTS.default)}
      disabled={boolean('disabled', false)}
      fullWidth={boolean('fullWidth', false)}
      loading={boolean('loading', false)}
      onClick={onClick}
      shape={select('shape', SHAPE_VARIANTS, SHAPE_VARIANTS.default)}
      variant={select('variant', VARIANT_TYPES, VARIANT_TYPES.default)}
    >
      Change my appearance from <strong>"Knobs"</strong> tab
    </Button>
  ));

storiesOf('Button.Color', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildColorStories(COLOR_VARIANTS.default))
  .add('Primary', () => buildColorStories(COLOR_VARIANTS.primary))
  .add('Secondary', () => buildColorStories(COLOR_VARIANTS.secondary));

storiesOf('Button.Shape', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildShapeStories(SHAPE_VARIANTS.default))
  .add('Rounded', () => buildShapeStories(SHAPE_VARIANTS.rounded))
  .add('Circle', () => buildShapeStories(SHAPE_VARIANTS.circle));

storiesOf('Button.+More Props', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('loading', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`loading-${key}`}>
        {buildShapeStories(SHAPE_VARIANTS.default, {
          variant: VARIANT_TYPES[key],
          disabled: boolean('disabled', false),
          loading: boolean('loading', true)
        })}
        <br />
      </Fragment>
    ))
  )
  .add('disabled', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`disabled-${key}`}>
        {buildShapeStories(SHAPE_VARIANTS.default, {
          variant: VARIANT_TYPES[key],
          disabled: boolean('disabled', true),
          loading: boolean('loading', false)
        })}
        <br />
      </Fragment>
    ))
  )
  .add('fullWidth', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`disabled-${key}`}>
        {buildShapeStories(SHAPE_VARIANTS.default, {
          variant: VARIANT_TYPES[key],
          fullWidth: boolean('fullWidth', true)
        })}
        <br />
      </Fragment>
    ))
  );

storiesOf('Button.Variant', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Default', () => buildVariantStories(VARIANT_TYPES.default))
  .add('Outline', () => buildVariantStories(VARIANT_TYPES.outline))
  .add('Text', () => buildVariantStories(VARIANT_TYPES.text));
