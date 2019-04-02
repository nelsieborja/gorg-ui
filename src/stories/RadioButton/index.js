import React from 'react';
import { bool, string } from 'prop-types';

import { COLOR_VARIATION } from '../themes';

import CheckboxInput from '../Checkbox/styled/CheckboxInput';
import RadioLabel from './styled/RadioLabel';

const Radio = ({ children, color, ...rest }) => (
  <RadioLabel>
    <CheckboxInput {...rest} type="radio" />
    <RadioLabel.Tick color={color} gap={!!children} />
    {children}
  </RadioLabel>
);

Radio.propTypes = {
  checked: bool,
  color: string,
  disabled: bool,
  name: string
};

Radio.defaultProps = {
  color: COLOR_VARIATION.default, // default|primary|secondary
  disabled: false
};

export default Radio;
