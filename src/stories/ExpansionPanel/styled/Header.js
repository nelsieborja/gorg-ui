import { styled } from '@storybook/theming';

import { FONTS } from '../../themes';

const Header = styled.header`
  display: flex;

  h2 {
    flex: 1;
    font-size: ${FONTS.BASE};
  }
`;

export default Header;
