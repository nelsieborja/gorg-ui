import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { styled } from '@storybook/theming';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';

import { SPACINGS } from '../themes';

import Container from '../_/Container';
import Button from '.';
import { COLOR_PROP, VARIANT_PROP } from './ButtonStyled';

const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_PROP);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Solid', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_PROP[key];
        return (
          <Button
            key={key}
            color={color}
            variant={select('variant', VARIANT_PROP, VARIANT_PROP.solid)}
            rounded={boolean('rounded', false)}
            disabled={boolean('disabled', false)}
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
        const color = COLOR_PROP[key];
        return (
          <Button
            key={key}
            color={color}
            variant={select('variant', VARIANT_PROP, VARIANT_PROP.outline)}
            rounded={boolean('rounded', false)}
            disabled={boolean('disabled', false)}
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
        const color = COLOR_PROP[key];
        return (
          <Button
            key={key}
            color={color}
            variant={select('variant', VARIANT_PROP, VARIANT_PROP.text)}
            rounded={boolean('rounded', false)}
            disabled={boolean('disabled', false)}
          >
            {color.toUpperCase()}
          </Button>
        );
      })}
    </Fragment>
  ));
