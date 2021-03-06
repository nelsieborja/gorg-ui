import { styled } from '@storybook/theming';

import { COLORS, ELEMENT, FONTS, TRANSITION } from '../../themes';

const { EASE, DURATION } = TRANSITION;
const { X, Y } = ELEMENT.PADDING;

const Section = styled.section`
  border-bottom: 1px solid ${COLORS.BORDER_COLOR};
  font-size: ${FONTS.S.BASE};
  height: 0;
  margin-left: ${ELEMENT.HEIGHT};
  overflow: hidden;
  transition: ${DURATION} ${EASE};

  div {
    padding: ${Y} 0 ${X};
  }
`;

export default Section;
