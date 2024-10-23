import { createGlobalStyle, css } from 'styled-components';
import { bodyThemeStyles } from './complect/bodyThemeStyles';
import { colorStyles } from './complect/colorStyles';
import { fontStyles } from './complect/fontStyles';
import { initialStyles } from './complect/initialStyles';
import { resetStyles } from './complect/resetStyles';
import { utilStyles } from './complect/utilStyles';
import { computedStyles } from './complect/computedStyles';
import { otherStyles } from './complect/otherStyles';

const styles = css`
  ${initialStyles}

  body {
    ${bodyThemeStyles}
  }

  ${computedStyles}
  ${colorStyles}
  ${utilStyles}
  ${resetStyles}
  ${fontStyles}
  ${otherStyles}
`;

export const StyledGlobalStyles = createGlobalStyle`${styles}`;
