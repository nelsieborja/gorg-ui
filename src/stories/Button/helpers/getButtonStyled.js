import { VARIANT_TYPE } from '../../themes';

import ButtonSolid from '../styled/ButtonSolid';
import ButtonOutline from '../styled/ButtonOutline';
import ButtonText from '../styled/ButtonText';

/**
 * Determines which Button Styled to use based on the variant type
 * @param {String} variantType [default|text|outline]
 */
function getButtonStyled(variantType) {
  switch (variantType) {
    case VARIANT_TYPE.outline:
      return ButtonOutline;
    case VARIANT_TYPE.text:
      return ButtonText;
    default:
      return ButtonSolid;
  }
}

export default getButtonStyled;
