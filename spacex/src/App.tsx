import styled from 'styled-components';
import { useGet } from './services/api/get';
import { GlobalStyle } from './styles/GlobalStyle';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const App = () => {
  const { loading, error, data } = useGet('/launches');
  console.log('api response', loading, error, data);
  return (
    <>
      <GlobalStyle />
      <Title>Hello world</Title>
    </>
  );
};

export default App;
