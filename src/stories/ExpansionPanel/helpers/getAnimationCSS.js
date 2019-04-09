import { keyframes } from '@storybook/theming';

const scale3dCSS = 'scale3d(0.6, 0.6, 0.6)';
export default scale3dCSS;

const animationFrom = `${scale3dCSS} rotate3d(0, 0, 0, 0)`;

/**
 * Returns enter animation for the "Plus" icon
 */
export const plusAnimation = keyframes`
  from {
    transform: ${animationFrom};
  }
  to {
    transform: ${scale3dCSS} rotate3d(0, 0, 1, -90deg);
  }
`;

/**
 * Returns enter animation for the "Minus" icon
 */
export const minusAnimation = keyframes`
  from {
    transform: ${animationFrom};
  }
  to {
    transform: ${scale3dCSS} rotate3d(0, 0, 1, 180deg);
  }
`;
