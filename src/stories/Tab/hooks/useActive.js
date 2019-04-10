import { useState, useEffect } from 'react';

/**
 * Handles `active` and `barStyle` states
 * @param {Boolean} initialActive
 */
function useActive(initialActive) {
  const [activeTab, setActiveTab] = useState(initialActive);
  const [barStyle, setBarStyle] = useState({});

  useEffect(() => setActiveTab(initialActive), [initialActive]);

  function onTaButtonClick(target, index) {
    const { offsetLeft, offsetWidth } = target;

    setActiveTab(index);
    setBarStyle({
      left: offsetLeft,
      width: offsetWidth
    });
  }

  return {
    activeTab,
    barStyle,
    onTaButtonClick
  };
}

export default useActive;
