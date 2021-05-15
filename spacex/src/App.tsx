import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { Loader } from './components/Loader/Loader';
import { useGet } from './services/api/useGet';
import { GlobalStyle } from './styles/GlobalStyle';
import List from './components/List/List';
import Layout from './containers/Layout';
import RocketImage from './components/RocketImage/RocketImage';
import { Header } from './components/Header/Header';

const App: FunctionComponent = () => {
  const { loading, error, data } = useGet('/launches');

  if (loading) return Loader();
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <GlobalStyle />
      <Header />

      <Layout>
        <RocketImage />
        <List listItems={data} />
      </Layout>
    </>
  );
};

export default App;
