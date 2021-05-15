import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Brandon Grotesque';
    box-sizing: border-box;
  }
`;
