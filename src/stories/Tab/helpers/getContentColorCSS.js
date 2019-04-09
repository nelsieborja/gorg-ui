import { SPECIAL_BUTTON_MAP } from '../../themes';

function getContentColorCSS({ active, color }) {
  const defaultColor = SPECIAL_BUTTON_MAP.normal(active ? color : null);

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
      color: ${SPECIAL_BUTTON_MAP.active};

      svg {
        path, circle {
          fill: ${SPECIAL_BUTTON_MAP.active};
        }
      };
    }
  `;
}
