import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Title>Hello world</Title>
  </>
);

export default App;
