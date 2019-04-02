import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIATION, SHAPE_VARIATION } from '../themes';

import getCheckboxID from './helpers/getCheckboxID';

import CheckboxInput from './styled/CheckboxInput';
import CheckboxLabel from './styled/CheckboxLabel';

const Switch = ({ children, color, shape, ...rest }) => {
  const checkboxID = getCheckboxID(rest.id);

  return (
    <Fragment>
      <CheckboxInput id={checkboxID} {...rest} />
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
  disabled: bool,
  shape: string
};

Switch.defaultProps = {
  color: COLOR_VARIATION.default, // default|primary|secondary
  defaultChecked: false,
  disabled: false,
  shape: SHAPE_VARIATION.default // default|rounded|circle
};

export default Switch;
