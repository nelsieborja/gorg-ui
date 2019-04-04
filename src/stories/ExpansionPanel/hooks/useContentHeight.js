import { useState, useEffect } from 'react';

function useContentHeight(active, contentEl) {
  const [height, setHeight] = useState();

  function onContentTransEnd() {
    if (active) setHeight('auto');
  }

  useEffect(() => {
    let timeout;
    function getContentHeight() {
      return contentEl.current.scrollHeight;
    }

    setHeight(getContentHeight());

    if (!active && height !== 0) {
      timeout = setTimeout(() => setHeight(0), 100);
    }

    return () => clearTimeout(timeout);
  }, [active]);

  return {
    style: { height },
    onTransitionEnd: onContentTransEnd
  };
}

export default useContentHeight;
