import { styled } from '@storybook/theming';

import { FONTS, TRANSITION } from '../../themes';

const { EASE, DURATION } = TRANSITION;

const Section = styled.section`
  font-size: ${FONTS.BASE};
  height: 0;
  overflow: hidden;
  transition: ${DURATION} ${EASE};
`;

export default Section;
