import { useState, useEffect } from 'react';

/**
 * Handles `height` state based on `active` state
 * @param {Boolean} active
 * @param {DOM} contentEl
 */
function useContentHeight(active, contentEl) {
  const [height, setHeight] = useState(0);

  function onContentTransEnd() {
    if (active) setHeight('auto');
  }

  useEffect(() => {
    function getContentHeight() {
      return contentEl.current.scrollHeight;
    }

    // Dont do anything if we've got a null element
    if (!contentEl.current) return;

    let timeout;

    if (height === 'auto') {
      setHeight(getContentHeight());
      timeout = setTimeout(() => setHeight(0), 50);
    } else {
      setHeight(active ? getContentHeight() : 0);
    }

    return () => clearTimeout(timeout);
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    style: { height },
    onTransitionEnd: onContentTransEnd
  };
}

export default useContentHeight;
