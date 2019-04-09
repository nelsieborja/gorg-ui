import { styled } from '@storybook/theming';
import { rem, math } from 'polished';

import { COLORS, ELEMENT, FONTS, TRANSITION } from '../../themes';

const { EASE, DURATION } = TRANSITION;
const { X, Y } = ELEMENT.PADDING;

const Section = styled.section`
  border-bottom: 1px solid ${COLORS.BORDER_COLOR};
  font-size: ${FONTS.S.BASE};
  height: 0;
  margin-left: ${math(`${ELEMENT.HEIGHT} + ${rem(2)}`)};
  overflow: hidden;
  transition: ${DURATION} ${EASE};

  div {
    padding: ${X} 0 ${Y};
  }
`;

export default Section;
