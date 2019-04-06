import { VARIANT_TYPES } from '../../themes';

import ButtonIconSolid from '../styled/ButtonIconSolid';
import ButtonIconOutline from '../styled/ButtonIconOutline';
import ButtonIconText from '../styled/ButtonIconText';

/**
 * Determines which Button Styled to use based on the variant type
 * @param {String} variantType [VARIANT_TYPES]
 */
function getButtonStyled(variantType) {
  switch (variantType) {
    case VARIANT_TYPES.outline:
      return ButtonIconOutline;

    case VARIANT_TYPES.text:
      return ButtonIconText;

    default:
      return ButtonIconSolid;
  }
}

export default getButtonStyled;
