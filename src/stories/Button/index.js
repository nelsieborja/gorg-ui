import React from 'react';
import { bool, string } from 'prop-types';

import { ReactComponent as Loader } from '../../svgs/loader.svg';
import { COLOR_VARIATION, SHAPE_VARIATION, VARIANT_TYPE } from '../themes';

import getButtonStyled from './helpers/getButtonStyled';
import getClickHandler from './helpers/getClickHandler';

const Button = ({ children, onClick, variant, ...rest }) => {
  let Button = getButtonStyled(variant);

  return (
    <Button {...rest} {...getClickHandler(onClick, rest.loading)}>
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
