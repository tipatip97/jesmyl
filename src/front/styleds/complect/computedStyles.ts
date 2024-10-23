import { css } from 'styled-components';

export const computedStyles = css`
  ${[1, 2, 3, 4, 5, 6, 7, 8, 'ko', 'ok'].map(id => {
    return css`
      .color--${id} {
        --icon-color: var(--color--${id});
        color: var(--color--${id});
      }

      .bgcolor--${id} {
        background-color: var(--color--${id});
      }

      .border--${id} {
        border: solid 1px var(--color--${id});
      }
    `;
  })}

  ${[0, 1, 3, 4, 5, 6, 7, 8, 9].map(num => {
    const tenUp = num * 10;

    return css`
      .fade-0${num} {
        opacity: ${num / 10};
      }

      .strong-square-${tenUp} {
        width: ${tenUp};
        min-width: ${tenUp};
        max-width: ${tenUp};
        height: ${tenUp};
        min-height: ${tenUp};
        max-height: ${tenUp};
      }

      .strong-height-${tenUp} {
        height: ${tenUp};
        min-height: ${tenUp};
        max-height: ${tenUp};
      }

      .strong-width-${tenUp} {
        width: ${tenUp};
        min-width: ${tenUp};
        max-width: ${tenUp};
      }
    `;
  })}

  ${Array.from({ length: 200 }, () => 1).map((_, i) => {
    return css`
      [class~='z-index:${i * 5}'] {
        z-index: ${i * 5};
      }
    `;
  })}
`;
