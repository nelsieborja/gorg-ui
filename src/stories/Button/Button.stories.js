import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { styled } from '@storybook/theming';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';

import { SPACINGS } from '../themes';

import Container from '../_/Container';
import Button from './Button';
import { COLOR_PROP, VARIANT_PROP } from './ButtonStyled';

const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Solid', () => (
    <Fragment>
      <Button
        color={select('color', COLOR_PROP, 'default')}
        variant={select('variant', VARIANT_PROP, 'solid')}
        rounded={boolean('rounded', false)}
      >
        DEFAULT
      </Button>
      <Button color="primary">PRIMARY</Button>
      <Button color="secondary">SECONDARY</Button>
      <br />
      <Button rounded>DEFAULT</Button>
      <Button color="primary" rounded>
        PRIMARY
      </Button>
      <Button color="secondary" rounded>
        SECONDARY
      </Button>
    </Fragment>
  ))
  .add('Outline', () => (
    <Fragment>
      <Button variant="outline">DEFAULT</Button>
      <Button color="primary" variant="outline">
        PRIMARY
      </Button>
      <Button color="secondary" variant="outline">
        SECONDARY
      </Button>
      <br />
      <Button variant="outline" rounded>
        DEFAULT
      </Button>
      <Button color="primary" variant="outline" rounded>
        PRIMARY
      </Button>
      <Button color="secondary" variant="outline" rounded>
        SECONDARY
      </Button>
    </Fragment>
  ))
  .add('Text', () => (
    <Fragment>
      <Button variant="text">DEFAULT</Button>
      <Button color="primary" variant="text">
        PRIMARY
      </Button>
      <Button color="secondary" variant="text">
        SECONDARY
      </Button>
      <br />
      <Button variant="text" rounded>
        DEFAULT
      </Button>
      <Button color="primary" variant="text" rounded>
        PRIMARY
      </Button>
      <Button color="secondary" variant="text" rounded>
        SECONDARY
      </Button>
    </Fragment>
  ));
