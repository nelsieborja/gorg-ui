import React, { Fragment } from 'react';
import { bool, string } from 'prop-types';
import uuidv4 from 'uuid/v4';

import { COLOR_VARIATION, SHAPE_VARIATION } from '../themes';

import SwitchCheckboxStyled from '../Switch/SwitchCheckboxStyled';
import CheckboxLabelStyled from './CheckboxLabelStyled';

const Switch = ({ children, color, shape, ...rest }) => {
  const checkboxID = rest.id || uuidv4();
  return (
    <Fragment>
      <SwitchCheckboxStyled id={checkboxID} type="checkbox" {...rest} />
      <CheckboxLabelStyled htmlFor={checkboxID} color={color} shape={shape} gap={!!children}>
        {children}
      </CheckboxLabelStyled>
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
