import React, { useEffect, useRef } from 'react';
import { bool, func, string, number } from 'prop-types';

import ButtonText from '../Button/styled/ButtonText';

const Button = ({ active, alignment, color, index, label, onTaButtonClick }) => {
  const buttonEl = useRef();

  useEffect(() => {
    if (!buttonEl.current) return;

    active && onTaButtonClick(buttonEl.current, index);
  }, [active, alignment]);

  function onClick({ target }) {
    onTaButtonClick(target, index);
  }

  return (
    <ButtonText color={color} onClick={onClick} ref={buttonEl}>
      {label}
    </ButtonText>
  );
};

Button.propTypes = {
  active: bool.isRequired,
  alignment: string.isRequired,
  color: string.isRequired,
  index: number.isRequired,
  label: string.isRequired,
  onTaButtonClick: func.isRequired
};

export default Button;
