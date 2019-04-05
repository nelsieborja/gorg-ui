import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIANTS, SHAPE_VARIANTS, VARIANT_TYPES, SPACINGS } from '../themes';

import Container from '../_/Container';
import { ReactComponent as Home } from '../../svgs/home.svg';
import ButtonIcon from '.';

const onClick = action('clicked');
const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

storiesOf('Button Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () => (
    <ButtonIcon
      color={select('color', COLOR_VARIANTS, COLOR_VARIANTS.default)}
      disabled={boolean('disabled', false)}
      onClick={onClick}
      shape={select('shape', SHAPE_VARIANTS, SHAPE_VARIANTS.default)}
      variant={select('variant', VARIANT_TYPES, VARIANT_TYPES.default)}
    >
      <Home />
    </ButtonIcon>
  ));
