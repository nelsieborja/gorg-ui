import { SPECIAL_TEXT_COLOR } from '../../themes';

/**
 *
 * @param {Object} { active: Boolean, color: Enum[COLOR_VARIANTS] }
 */
function getContentColorCSS({ active, color }) {
  const normalColor = SPECIAL_TEXT_COLOR.normal(active ? color : null);

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
