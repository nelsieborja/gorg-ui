import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, VARIANT_TYPE, SPACINGS } from '../themes';

import Container from '../_/Container';
import Button from '.';

const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIATION);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Solid', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={select('variant', VARIANT_TYPE, VARIANT_TYPE.solid)}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ))
  .add('Outline', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={select('variant', VARIANT_TYPE, VARIANT_TYPE.outline)}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ))
  .add('Text', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={select('variant', VARIANT_TYPE, VARIANT_TYPE.text)}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ))
  .add('Loading State', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', true)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.solid}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
      <br />
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', true)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.outline}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
      <br />
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', false)}
            loading={boolean('loading', true)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.text}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ))
  .add('Disabled State', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', true)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.solid}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
      <br />
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', true)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.outline}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
      <br />
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return (
          <Button
            key={key}
            color={color}
            disabled={boolean('disabled', true)}
            loading={boolean('loading', false)}
            rounded={boolean('rounded', false)}
            variant={VARIANT_TYPE.text}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ));
