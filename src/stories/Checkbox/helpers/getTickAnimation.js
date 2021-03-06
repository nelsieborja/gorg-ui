import { keyframes } from '@storybook/theming';

/**
 * Returns enter animation for the Checkbox tick
 */
function getTickAnimation() {
  return keyframes`
    0% {
      transform: scale3d(0, 0, 0) rotateZ(45deg);
    }
    100% {
      transform: scale3d(1,1,1) rotateZ(45deg);
    }
  `;
}

export default getTickAnimation;
