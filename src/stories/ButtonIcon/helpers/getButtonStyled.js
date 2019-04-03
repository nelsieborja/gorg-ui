import { VARIANT_TYPE } from '../../themes';

import ButtonIconSolid from '../styled/ButtonIconSolid';
import ButtonIconOutline from '../styled/ButtonIconOutline';
import ButtonIconText from '../styled/ButtonIconText';

/**
 * Determines which Button Styled to use based on the variant type
 * @param {String} variantType [default|text|outline]
 */
function getButtonStyled(variantType) {
  switch (variantType) {
    case VARIANT_TYPE.outline:
      return ButtonIconOutline;

    case VARIANT_TYPE.text:
      return ButtonIconText;

    default:
      return ButtonIconSolid;
  }
}

export default getButtonStyled;
