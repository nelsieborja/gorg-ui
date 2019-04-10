import React from 'react';

import Section from './styled/Section';

const Content = ({ active, ...rest }) => (active ? <Section {...rest} /> : null);

export default Content;
