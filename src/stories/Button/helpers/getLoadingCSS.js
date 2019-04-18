import { math } from 'polished';

import { ELEMENT } from '../../themes';

const { X, Y } = ELEMENT.PADDING;

/**
 * Adds Loader CSS if button is not `disabled` and when it's in `loading` state
 * @param {Object} { disabled: Boolean, loading: Boolean }
 */
function getLoadingCSS({ disabled, loading }) {
  return (
    !disabled &&
    loading &&
    `
    padding-left: ${math(`(${X} * 2) + ${Y}`)};
    .-loader {
      display: block;
    }
    `
  );
}

export default getLoadingCSS;
