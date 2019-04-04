import { useState } from 'react';

function useActive() {
  const [active, setActive] = useState(false);

  function onToggleExpansionPanel() {
    setActive(!active);
  }

  return {
    active,
    onToggleExpansionPanel
  };
}

export default useActive;
