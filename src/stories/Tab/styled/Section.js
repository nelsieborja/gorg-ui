import { styled } from '@storybook/theming';

import { ELEMENT, FONTS } from '../../themes';

const { Y } = ELEMENT.PADDING;

const Section = styled.section`
  font-size: ${FONTS.S.BASE};
  padding: ${Y} 0;
`;

export default Section;
