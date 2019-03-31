import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';
import uuidv4 from 'uuid/v4';

import { COLOR_VARIATION } from '../themes';

import SwitchCheckbox from './styled/SwitchCheckbox';
import SwitchLabel from './styled/SwitchLabel';

const Switch = ({ children, color, ...rest }) => {
  const checkboxID = rest.id || uuidv4();
  return (
    <Fragment>
      <SwitchCheckbox id={checkboxID} type="checkbox" {...rest} />
      <SwitchLabel htmlFor={checkboxID} color={color} gap={!!children} />
      {children}
    </Fragment>
  );
};

Switch.propTypes = {
  checked: bool,
  color: string,
  defaultChecked: bool
};

Switch.defaultProps = {
  color: COLOR_VARIATION.default,
  defaultChecked: false
};

export default Switch;
