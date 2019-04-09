import { styled } from '@storybook/theming';
import { rem } from 'polished';

import { ALIGNMENTS, COLORS, COLOR_VARIANTS_MAP, TRANSITION } from '../../themes';

const borderWidth = rem(3);

const Header = styled.header`
  display: flex;
  justify-content: ${({ alignment }) => ALIGNMENTS[alignment]};

  border-bottom: 1px solid ${COLORS.BORDER_COLOR};
  position: relative;
`;

Header.Bar = styled.i`
  position: absolute;
  bottom: 0;

  border-top: ${borderWidth} solid ${({ color }) => COLOR_VARIANTS_MAP[color].normal};
  transition: ${TRANSITION.DURATION};
`;

export default Header;
