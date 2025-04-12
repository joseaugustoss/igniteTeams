// @types/styled.d.ts
import 'styled-components';
import { theme } from '../theme'; // ← nomeado

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
