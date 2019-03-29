import React from 'react';
import { bool, string } from 'prop-types';

import ButtonStyled, { COLOR_PROP, VARIANT_PROP } from './ButtonStyled';

const Button = ({ children, ...rest }) => <ButtonStyled {...rest}>{children}</ButtonStyled>;

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
