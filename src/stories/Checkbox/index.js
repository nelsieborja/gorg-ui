import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIATION, SHAPE_VARIATION } from '../themes';

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
  color: COLOR_VARIATION.default, // default|primary|secondary
  defaultChecked: false,
  disabled: false,
  shape: SHAPE_VARIATION.default // default|rounded|circle
};

export default Switch;
