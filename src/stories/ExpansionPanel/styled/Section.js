import { styled } from '@storybook/theming';

import { COLORS, ELEMENT, FONTS, TRANSITION, SPACINGS } from '../../themes';

const { EASE, DURATION } = TRANSITION;
const { X, Y } = ELEMENT.PADDING;

const Section = styled.section`
  background: ${COLORS.DEFAULT};
  font-size: ${FONTS.S.BASE};
  height: 0;
  margin-bottom: ${SPACINGS.GUTTER_XS};
  overflow: hidden;
  transition: ${DURATION} ${EASE};

  div {
    padding: ${X} ${Y} ${Y};
  }
`;

export default Section;
