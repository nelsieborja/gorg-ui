import { default as getButtonIconGapProps } from '../../ButtonIcon/helpers/getButtonGapProps';
/**
 * Generates `gap` props only if necessary
 * @param {String|Object} label
 */
function getButtonGapProps(label) {
  const { props } = label;

  if (!props || !props.children) return {};

  return getButtonIconGapProps(props.children);
}

export default getButtonGapProps;
