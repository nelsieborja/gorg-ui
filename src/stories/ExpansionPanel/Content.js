import React, { forwardRef, useRef, useImperativeHandle } from 'react';

import Section from './styled/Section';

const Content = forwardRef((props, ref) => {
  const inputRef = useRef();

  // https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  useImperativeHandle(
    ref,
    () => ({
      scrollHeight: (inputRef.current || {}).scrollHeight || 0
    }),
    [props.active]
  );

  return <Section {...props} ref={inputRef} />;
});

export default Content;
