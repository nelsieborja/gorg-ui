import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIANTS } from '../themes';

import CheckboxInput from '../Checkbox/styled/CheckboxInput';
import SwitchLabel from './styled/SwitchLabel';

const Switch = ({ children, color, ...rest }) => (
  <SwitchLabel>
    <CheckboxInput {...rest} />
    <SwitchLabel.Tick color={color} gap={!!children} />
    {children}
  </SwitchLabel>
);

Switch.propTypes = {
  checked: bool,
  color: string,
  defaultChecked: bool,
  disabled: bool
};

Switch.defaultProps = {
  color: COLOR_VARIANTS.default, // COLOR_VARIANTS
  defaultChecked: false,
  disabled: false
};

export default Switch;
