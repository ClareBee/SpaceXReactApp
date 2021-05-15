import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { Loader } from './components/Loader/Loader';
import { useGet } from './services/api/useGet';
import { GlobalStyle } from './styles/GlobalStyle';
import List from './components/List/List';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const App: FunctionComponent = () => {
  const { loading, error, data } = useGet('/launches');

  if (loading) return Loader();
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <GlobalStyle />
      <Title data-testid="header">Hello world</Title>
      <List listItems={data} />
    </>
  );
};

export default App;
