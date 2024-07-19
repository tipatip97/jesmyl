import 'styled-components';
import { StyledDefaultTheme } from './styledGlobalStyles';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {}
}
