import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --primary-blue: #215184;
    --secondary-blue: #122d4a;
    --brand-grey: #545454;
    --brand-white: #fff;
    --brand-font: 'Brandon Grotesque', Arial, Helvetica, sans-serif;
  }
  body {
    width: 100%;
    font-family: var(--brand-font);
    box-sizing: border-box;
    header, div {
    max-width: 100%;
    }
  }
`;
