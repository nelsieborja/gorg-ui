import isFunction from '../../../helpers/isFunction';
/**
 * Generates click handler props only if necessary
 * @param {Fn} onClick
 * @param {Boolean} loading
 */
function getClickHandler(onClick, loading) {
  if (!isFunction(onClick) || loading) {
    return {};
  }

  return {
    onClick
  };
}

export default getClickHandler;
