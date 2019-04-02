import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIATION, SHAPE_VARIATION } from '../themes';

import getCheckboxID from './helpers/getCheckboxID';

import SwitchCheckbox from '../Switch/styled/SwitchCheckbox';
import CheckboxLabel from './styled/CheckboxLabel';

const Switch = ({ children, color, shape, ...rest }) => {
  const checkboxID = getCheckboxID();

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
  color: COLOR_VARIATION.default, // default|primary|secondary
  defaultChecked: false,
  shape: SHAPE_VARIATION.default // default|rounded|circle
};

export default Switch;
