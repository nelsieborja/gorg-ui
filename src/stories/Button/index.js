import React from 'react';
import { bool, string } from 'prop-types';

import { ReactComponent as Loader } from '../../svgs/loader.svg';

import { COLOR_VARIATION, SHAPE_VARIATION, VARIANT_TYPE } from '../themes';

import ButtonSolidStyled from './ButtonSolidStyled';
import ButtonOutlineStyled from './ButtonOutlineStyled';
import ButtonTextStyled from './ButtonTextStyled';

const Button = ({ children, variant, ...rest }) => {
  let Button = ButtonSolidStyled;

  if (variant === VARIANT_TYPE.outline) {
    Button = ButtonOutlineStyled;
  } else if (variant === VARIANT_TYPE.text) {
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
  shape: string,
  variant: string
};

Button.defaultProps = {
  color: COLOR_VARIATION.default, // default|primary|secondary
  disabled: false,
  loading: false,
  shape: SHAPE_VARIATION.default, // default|rounded|circle
  variant: VARIANT_TYPE.default // default|text|outline
};

export default Button;
