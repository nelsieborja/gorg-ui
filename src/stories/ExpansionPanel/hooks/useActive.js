import { useState, useEffect } from 'react';

/**
 * Handles `active` state
 * @param {Boolean} initialActive
 */
function useActive(initialActive) {
  const [active, setActive] = useState(initialActive);

  function onToggleExpansionPanel() {
    setActive(!active);
  }

  useEffect(() => {
    if (active !== initialActive) {
      setActive(initialActive);
    }
  }, [initialActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    active,
    onToggleExpansionPanel
  };
}

export default useActive;
