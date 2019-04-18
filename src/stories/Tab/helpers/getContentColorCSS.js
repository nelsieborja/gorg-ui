import { SPECIAL_BUTTON_MAP } from '../../themes';

/**
 *
 * @param {Object} { active: Boolean, color: Enum[COLOR_VARIANTS] }
 */
function getContentColorCSS({ active, color }) {
  const normalColor = SPECIAL_BUTTON_MAP.normal(active ? color : null);

  return `
    color: ${normalColor};

    svg {
      path, circle {
        fill: ${normalColor};
      }
    };
  `;
}

export default getContentColorCSS;
