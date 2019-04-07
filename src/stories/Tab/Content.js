import React from 'react';
import { oneOfType, object, string } from 'prop-types';

import Section from './styled/Section';

const Content = ({ active, ...rest }) => (active ? <Section {...rest} /> : null);

Content.propTypes = {
  label: oneOfType([string, object]).isRequired
};

export default Content;
