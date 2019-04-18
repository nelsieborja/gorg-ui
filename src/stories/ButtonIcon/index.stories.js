// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select} from '@storybook/addon-knobs/react';
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
  .add('Icons Only', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`buttonicon-${key}`}>
        {buildColorStories(Home, SHAPE_VARIANTS.default, {
          variant: VARIANT_TYPES[key],
        })}
        {buildColorStories(Calendar, SHAPE_VARIANTS.rounded, {
          variant: VARIANT_TYPES[key],
        })}
        {buildColorStories(Dashboard, SHAPE_VARIANTS.circle, {
          variant: VARIANT_TYPES[key],
        })}
        <br />
      </Fragment>
    ))
  )

  .add('Icons + Right Label', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`buttonicon-${key}`}>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          <Home /> Home
        </ButtonIcon>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          <Calendar /> Calendar
        </ButtonIcon>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          <Dashboard /> Dashboard
        </ButtonIcon>
        <br />
      </Fragment>
    ))
  )

  .add('Icons + Left Label', () =>
    variantTypeKeys.map(key => (
      <Fragment key={`buttonicon-${key}`}>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          Home <Home />
        </ButtonIcon>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          Calendar <Calendar />
        </ButtonIcon>
        <ButtonIcon  color={select('colors', COLOR_VARIANTS, COLOR_VARIANTS.default)} variant={VARIANT_TYPES[key]}>
          Dashboard <Dashboard />
        </ButtonIcon>
        <br />
      </Fragment>
    ))
  )
