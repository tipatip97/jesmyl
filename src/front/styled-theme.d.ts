import 'styled-components';
import { StyledDefaultTheme } from './styleds/styledGlobalStyles';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {}
}
