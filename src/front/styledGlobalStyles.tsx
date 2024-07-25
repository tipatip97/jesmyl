import { createGlobalStyle, css } from 'styled-components';

const lightColors = (selector: string) => css`
  ${selector && `${selector} {`}
  --color--1: #eaf1e9;
  --color--2: #d5e8d5;
  --color--3: #122217;
  --color--4: #414840;
  --color--5: #fbfdf8;
  --color--6: #f8fbf4;
  --color--7: #336a4a;
  --color--8: #fbfdf8;
  --color--ok: #47bb00;
  --color--ko: #ec6969;
  ${selector && '}'}
`;

const darkColors = (selector: string) => css`
  ${selector && `${selector} {`}
  --color--1: #242a26;
  --color--2: #3b4b40;
  --color--3: #d5e6d6;
  --color--4: #b2b9b1;
  --color--5: #1a1c19;
  --color--6: #d3e5d7;
  --color--7: #b5f2c8;
  --color--8: #fbfdf8;
  --color--ok: #9bec69;
  --color--ko: #ec6969;
  ${selector && '}'}
`;

const StyledGlobalStyles = createGlobalStyle`
  body{
    @media (prefers-color-scheme: light) {
        ${lightColors('&:not(.reverse-theme)')}
        ${darkColors('')}
    }

    @media (prefers-color-scheme: dark) {
        ${darkColors('&:not(.reverse-theme)')}
        ${lightColors('')}
    }
  }

  a {
    text-decoration: none;
  }
`;

export default StyledGlobalStyles;
