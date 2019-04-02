import { styled } from '@storybook/theming';

const CheckboxInput = styled.input`
  height: 0;
  width: 0;

  position: absolute;
  visibility: hidden;
`;

CheckboxInput.defaultProps = {
  type: 'checkbox'
};

export default CheckboxInput;
