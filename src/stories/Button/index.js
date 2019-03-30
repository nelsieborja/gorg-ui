import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_PROP, VARIANT_PROP } from './ButtonStyled';
import ButtonSolidStyled from './ButtonSolidStyled';
import ButtonOutlineStyled from './ButtonOutlineStyled';
import ButtonTextStyled from './ButtonTextStyled';

const Button = ({ variant, ...rest }) => {
  let Button = ButtonSolidStyled;

  if (variant === VARIANT_PROP.outline) {
    Button = ButtonOutlineStyled;
  } else if (variant === VARIANT_PROP.text) {
    Button = ButtonTextStyled;
  }

  return <Button {...rest} />;
};

Button.propTypes = {
  color: string,
  disabled: bool,
  rounded: bool,
  variant: string
};

Button.defaultProps = {
  color: COLOR_PROP.default, // default|primary|secondary
  disabled: false,
  rounded: false,
  variant: VARIANT_PROP.solid // solid|text|outline
};

export default Button;
