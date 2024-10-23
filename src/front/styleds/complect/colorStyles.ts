import { css } from 'styled-components';

export const colorStyles = css`
  .bgcolor-white {
    background-color: white;
  }

  .color-white {
    color: white;
  }

  .mood- {
    &for-2 {
      &.the-button {
        border-color: var(--color--1);
        color: var(--color--4);
      }

      .input-keyboard-flash-controlled {
        background-color: var(--color--1);
        color: var(--color--3);
      }
    }
  }

  .error-message {
    --icon-color: var(--color--ko);
    color: var(--color--ko);
  }

  .success-message {
    --icon-color: var(--color--ok);
    color: var(--color--ok);
  }

  .bg-inherit {
    background: inherit;
  }
`;
