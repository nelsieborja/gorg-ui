import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIANTS, SPACINGS } from '../themes';

import Container from '../_/Container';
import Switch from '.';

const onChange = action('changed');

const CustomContainer = styled(Container)`
  label {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorPropsKeys = Object.keys(COLOR_VARIANTS);

const buildDynamicPropStories = props =>
  colorPropsKeys.map(key => (
    <Switch key={key} color={COLOR_VARIANTS[key]} onChange={onChange} {...props} />
  ));

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Live Props', () => (
    <Switch
      color={select('color', COLOR_VARIANTS, COLOR_VARIANTS.default)}
      disabled={boolean('disabled', false)}
      onChange={onChange}
    >
      Change my appearance from <strong>"Knobs"</strong> tab
    </Switch>
  ));

storiesOf('Switch.State', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Controlled', () => buildDynamicPropStories({ checked: boolean('checked', false) }))
  .add('Uncontrolled', () =>
    buildDynamicPropStories({ defaultChecked: boolean('defaultChecked', true) })
  )
  .add('Disabled', () => buildDynamicPropStories({ disabled: boolean('disabled', true) }));
