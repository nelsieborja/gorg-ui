import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { styled } from '@storybook/theming';

import { COLOR_VARIANTS, SHAPE_VARIANTS, VARIANT_TYPES, SPACINGS } from '../themes';

import Container from '../_/Container';
import { ReactComponent as Home } from '../../svgs/home.svg';
import { ReactComponent as Calendar } from '../../svgs/calendar.svg';
import { ReactComponent as Dashboard } from '../../svgs/dashboard.svg';
import ButtonIcon from '.';

const onClick = action('clicked');
const CustomContainer = styled(Container)`
  button {
    margin: ${SPACINGS.GUTTER_XS};
  }
`;

const colorVariationKeys = Object.keys(COLOR_VARIANTS);
const variantTypeKeys = Object.keys(VARIANT_TYPES);
const buildColorStories = (Icon, shape, rest) =>
  colorVariationKeys.map(key => (
    <ButtonIcon key={key} color={COLOR_VARIANTS[key]} onClick={onClick} shape={shape} {...rest}>
      <Icon />
    </ButtonIcon>
  ));

storiesOf('Button Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <CustomContainer>{story()}</CustomContainer>)
  .add('Live Props', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`buttonicon-${key}`}>
        {buildColorStories(Home, SHAPE_VARIANTS.default, {
          variant: VARIANT_TYPES[key],
          disabled: boolean('disabled', false)
        })}
        {buildColorStories(Calendar, SHAPE_VARIANTS.rounded, {
          variant: VARIANT_TYPES[key],
          disabled: boolean('disabled', false)
        })}
        {buildColorStories(Dashboard, SHAPE_VARIANTS.circle, {
          variant: VARIANT_TYPES[key],
          disabled: boolean('disabled', false)
        })}
        <br />
      </Fragment>
    ))
  );
