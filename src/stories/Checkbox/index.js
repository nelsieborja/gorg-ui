import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIANTS, SHAPE_VARIANTS } from '../themes';

import CheckboxInput from './styled/CheckboxInput';
import CheckboxLabel from './styled/CheckboxLabel';

const Switch = ({ children, color, shape, ...rest }) => (
  <CheckboxLabel>
    <CheckboxInput {...rest} />
    <CheckboxLabel.Tick color={color} shape={shape} gap={!!children} />
    {children}
  </CheckboxLabel>
);

Switch.propTypes = {
  checked: bool,
  color: string,
  defaultChecked: bool,
  disabled: bool,
  name: string,
  shape: string
};

Switch.defaultProps = {
  color: COLOR_VARIANTS.default, // COLOR_VARIANTS
  defaultChecked: false,
  disabled: false,
  shape: SHAPE_VARIANTS.default // SHAPE_VARIANTS
};

export default Switch;
