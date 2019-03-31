import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';
import uuidv4 from 'uuid/v4';

import { COLOR_VARIATION, SHAPE_VARIATION } from '../themes';

import SwitchCheckbox from '../Switch/styled/SwitchCheckbox';
import CheckboxLabel from './styled/CheckboxLabel';

const Switch = ({ children, color, shape, ...rest }) => {
  const checkboxID = rest.id || uuidv4();
  return (
    <Fragment>
      <SwitchCheckbox id={checkboxID} type="checkbox" {...rest} />
      <CheckboxLabel htmlFor={checkboxID} color={color} shape={shape} gap={!!children}>
        {children}
      </CheckboxLabel>
    </Fragment>
  );
};

Switch.propTypes = {
  checked: bool,
  color: string,
  defaultChecked: bool,
  shape: string
};

Switch.defaultProps = {
  color: COLOR_VARIATION.default,
  defaultChecked: false,
  shape: SHAPE_VARIATION.default // default|rounded|circle
};

export default Switch;
