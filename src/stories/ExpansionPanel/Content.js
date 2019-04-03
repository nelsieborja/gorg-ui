import React from 'react';

import Section from './styled/Section';

const Content = ({ children, active }) => (active ? <Section>{children}</Section> : null);

export default Content;
