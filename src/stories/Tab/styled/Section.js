import { styled } from '@storybook/theming';

import { ELEMENT, FONTS } from '../../themes';
import getBorderCSS from '../helpers/getBorderCSS';

const { Y } = ELEMENT.PADDING;

const Section = styled.section`
  font-size: ${FONTS.S.BASE};
  ${getBorderCSS}
  padding: ${Y};
`;

export default Section;
