import React from 'react';
import { bool, string } from 'prop-types';

import { ReactComponent as Loader } from '../../svgs/loader.svg';

import { COLOR_PROP, VARIANT_PROP } from './ButtonStyled';
import ButtonSolidStyled from './ButtonSolidStyled';
import ButtonOutlineStyled from './ButtonOutlineStyled';
import ButtonTextStyled from './ButtonTextStyled';

const Button = ({ children, variant, ...rest }) => {
  let Button = ButtonSolidStyled;

  if (variant === VARIANT_PROP.outline) {
    Button = ButtonOutlineStyled;
  } else if (variant === VARIANT_PROP.text) {
    Button = ButtonTextStyled;
  }

  return (
    <Button {...rest}>
      <Loader className="_loader" />
      {children}
    </Button>
  );
};

Button.propTypes = {
  color: string,
  disabled: bool,
  loading: bool,
  rounded: bool,
  variant: string
};

Button.defaultProps = {
  color: COLOR_PROP.default, // default|primary|secondary
  disabled: false,
  loading: false,
  rounded: false,
  variant: VARIANT_PROP.solid // solid|text|outline
};

export default Button;
