import React from 'react';
import { bool, string } from 'prop-types';

import getButtonGapProps from './helpers/getButtonGapProps';
import getButtonStyled from './helpers/getButtonStyled';
import Button from '../Button';

const ButtonIcon = ({ forwardRef, ...rest }) => {
  let ButtonIcon = getButtonStyled(rest.variant);

  return <ButtonIcon ref={forwardRef} {...rest} {...getButtonGapProps(rest.children)} />;
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
