import { styled } from '@storybook/theming';

import { FONTS } from '../../themes';

const Header = styled.header`
  display: flex;
  align-items: center;

  h2 {
    flex: 1;
    font-size: ${FONTS.S.BASE};
    font-weight: ${FONTS.W.SEMIBOLD};
  }
`;

export default Header;
