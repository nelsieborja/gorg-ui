import React, { forwardRef } from 'react';

import Section from './styled/Section';

const Content = forwardRef(({ children, ...rest }, ref) => {
  // const inputRef = useRef(false);

  // https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     scrollHeight: (inputRef.current || {}).scrollHeight || 0
  //   }),
  // );

  return (
    <Section {...rest} ref={ref}>
      <div>{children}</div>
    </Section>
  );
});

export default Content;
