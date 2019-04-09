import React, { useEffect, useRef } from 'react';
import { bool, func, string, number, object, oneOfType } from 'prop-types';

import getButtonGapProps from './helpers/getButtonGapProps';

import { default as ButtonStyled } from './styled/Button';

const Button = ({ active, alignment, color, index, label, onTaButtonClick }) => {
  const buttonEl = useRef();

  useEffect(() => {
    if (!buttonEl.current) return;

    active && onTaButtonClick(buttonEl.current, index);
  }, [active, alignment]);

  function onClick({ currentTarget }) {
    onTaButtonClick(currentTarget, index);
  }

  return (
    <ButtonStyled
      active={active}
      color={color}
      onClick={onClick}
      ref={buttonEl}
      {...getButtonGapProps(label)}
    >
      {label}
    </ButtonStyled>
  );
};

Button.propTypes = {
  active: bool.isRequired,
  alignment: string.isRequired,
  color: string.isRequired,
  index: number.isRequired,
  label: oneOfType([string, object]).isRequired,
  onTaButtonClick: func.isRequired
};

export default Button;
