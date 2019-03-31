import React from 'react';
import { bool, string } from 'prop-types';

import { ReactComponent as Loader } from '../../svgs/loader.svg';
import { COLOR_VARIATION, SHAPE_VARIATION, VARIANT_TYPE } from '../themes';

import ButtonSolid from './styled/ButtonSolid';
import ButtonOutline from './styled/ButtonOutline';
import ButtonText from './styled/ButtonText';

const Button = ({ children, variant, ...rest }) => {
  let Button = ButtonSolid;

  if (variant === VARIANT_TYPE.outline) {
    Button = ButtonOutline;
  } else if (variant === VARIANT_TYPE.text) {
    Button = ButtonText;
  }

  return (
    <Button {...rest}>
      {rest.loading && <Loader className="_loader" />}
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
