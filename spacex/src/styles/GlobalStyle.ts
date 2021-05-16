import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    width: 100%;
    font-family: 'Brandon Grotesque';
    box-sizing: border-box;
    header, div {
    max-width: 100%;
    }
  }
`;
