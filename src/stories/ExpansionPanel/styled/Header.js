import { styled } from '@storybook/theming';

import { FONTS, SPECIAL_BUTTON_MAP } from '../../themes';

const Header = styled.header`
  display: flex;
  align-items: center;

  h2 {
    color: ${({ active, color }) => SPECIAL_BUTTON_MAP.normal(active ? color : null)};
    flex: 1;
    font-size: ${FONTS.S.BASE};
    font-weight: ${FONTS.W.SEMIBOLD};
  }
`;

export default Header;
