import React from 'react';

import getButtonStyled from './helpers/getButtonStyled';
import Button from '../Button';

const ButtonIcon = props => {
  let ButtonIcon = getButtonStyled(props.variant);

  return <ButtonIcon {...props} />;
};

ButtonIcon.propTypes = Button.propTypes;
ButtonIcon.defaultProps = Button.defaultProps;

export default ButtonIcon;
