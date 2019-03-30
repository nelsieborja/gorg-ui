import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIATION, SPACINGS } from '../themes';

import Container from '../_/Container';
import Switch from '.';

const CustomContainer = styled(Container)`
  span {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIATION);

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Uncontrolled', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return <Switch key={key} color={color} defaultChecked={boolean('defaultChecked', true)} />;
      })}
    </Fragment>
  ))
  .add('Controlled', () => (
    <Fragment>
      {colorPropsKeys.map(key => {
        const color = COLOR_VARIATION[key];
        return <Switch key={key} color={color} checked={boolean('checked', false)} />;
      })}
    </Fragment>
  ));
