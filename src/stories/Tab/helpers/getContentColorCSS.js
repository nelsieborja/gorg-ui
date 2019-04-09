import { COLORS, COLOR_VARIANTS_MAP } from '../../themes';

function getContentColorCSS({ active, color }) {
  const defaultColor = active ? COLOR_VARIANTS_MAP[color].colorActive : COLORS.BASE_LIGHT;
  return `
    color: ${defaultColor};

    svg {
      path, circle {
        fill: ${defaultColor};
      }
    };
  `;
}

export default getContentColorCSS;

export function getContentColorActiveCSS() {
  return `
    &:not(:disabled):active {
      color: ${COLORS.BASE};

      svg {
        path, circle {
          fill: ${COLORS.BASE};
        }
      };
    }
  `;
}
