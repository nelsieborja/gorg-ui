import React from 'react';
import { bool, string } from 'prop-types';

import { ReactComponent as Loader } from '../../svgs/loader.svg';
import { COLOR_VARIANTS, SHAPE_VARIANTS, VARIANT_TYPES } from '../themes';

import getButtonStyled from './helpers/getButtonStyled';
import getClickHandler from './helpers/getClickHandler';

const Button = ({ children, forwardRef, onClick, variant, ...rest }) => {
  let Button = getButtonStyled(variant);

  return (
    <Button ref={forwardRef} {...rest} {...getClickHandler(onClick, rest.loading)}>
      {rest.loading && <Loader className="-loader" />}
      {children}
    </Button>
  );
};

Button.propTypes = {
  color: string,
  disabled: bool,
  fullWidth: bool,
  loading: bool,
  shape: string,
  variant: string
};

Button.defaultProps = {
  color: COLOR_VARIANTS.default, // COLOR_VARIANTS
  disabled: false,
  fullWidth: false,
  loading: false,
  shape: SHAPE_VARIANTS.default, // SHAPE_VARIANTS
  variant: VARIANT_TYPES.default // VARIANT_TYPES
};

export default Button;
