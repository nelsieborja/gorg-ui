import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIANTS } from '../themes';

import getCheckboxID from './helpers/getCheckboxID';

import CheckboxInput from '../Checkbox/styled/CheckboxInput';
import SwitchLabel from './styled/SwitchLabel';

const Switch = ({ children, color, ...rest }) => {
  const checkboxID = getCheckboxID(rest.id);

  return (
    <>
      <CheckboxInput id={checkboxID} type="checkbox" {...rest} />
      <SwitchLabel htmlFor={checkboxID} color={color} gap={!!children} />
      {children}
    </>
  );
};

Switch.propTypes = {
  checked: bool,
  color: string,
  defaultChecked: bool,
  disabled: bool
};

Switch.defaultProps = {
  color: COLOR_VARIANTS.default, // default|primary|secondary
  defaultChecked: false,
  disabled: false
};

export default Switch;
