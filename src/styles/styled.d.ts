import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: ETheme,

    colors: {
      primary: string,
      secundary: string,
      
      background: string,
      text: string,
    },
  }
}