import { styled } from '@storybook/theming';

import { ALIGNMENTS, COLOR_VARIANTS_MAP, TRANSITION } from '../../themes';
import getBorderCSS, { borderWidth } from '../helpers/getBorderCSS';

const Header = styled.header`
  display: flex;
  justify-content: ${({ alignment }) => ALIGNMENTS[alignment]};

  ${getBorderCSS}
  position: relative;
`;

Header.Bar = styled.i`
  position: absolute;
  top: 100%;

  border-top: ${borderWidth} solid ${({ color }) => COLOR_VARIANTS_MAP[color].dark};
  transition: ${TRANSITION.DURATION};
`;

export default Header;
