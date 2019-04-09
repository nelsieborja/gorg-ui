import React from 'react';
import { bool, string } from 'prop-types';

import getButtonStyled from './helpers/getButtonStyled';
import Button from '../Button';

const ButtonIcon = props => {
  let ButtonIcon = getButtonStyled(props.variant);

  return <ButtonIcon {...props} />;
};

ButtonIcon.propTypes = {
  ...Button.propTypes,
  gap: bool,
  gapPosition: string
};

ButtonIcon.defaultProps = {
  ...Button.defaultProps,
  gap: false,
  gapPosition: 'right' // right|left
};

export default ButtonIcon;
