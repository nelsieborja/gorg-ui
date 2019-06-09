import React from 'react';

import getButtonGapProps from './helpers/getButtonGapProps';
import getButtonStyled from './helpers/getButtonStyled';
import Button from '../Button';

const ButtonIcon = ({ forwardRef, ...rest }) => {
  let ButtonIcon = getButtonStyled(rest.variant);

  return <ButtonIcon ref={forwardRef} {...rest} {...getButtonGapProps(rest.children)} />;
};

ButtonIcon.propTypes = {
  ...Button.propTypes
};

ButtonIcon.defaultProps = {
  ...Button.defaultProps
};

export default ButtonIcon;
