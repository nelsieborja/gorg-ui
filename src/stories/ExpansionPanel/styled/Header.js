import { styled } from '@storybook/theming';

import { FONTS, SPECIAL_TEXT_COLOR } from '../../themes';

const Header = styled.header`
  display: flex;
  align-items: center;

  h2 {
    color: ${({ active, color }) => SPECIAL_TEXT_COLOR.normal(active ? color : null)};
    flex: 1;
    font-size: ${FONTS.S.BASE};
    font-weight: ${FONTS.W.SEMIBOLD};
  }
`;

export default Header;
