import { FunctionComponent, useState, useEffect } from 'react';

import { Loader } from './components/Loader/Loader';
import { useGet } from './services/api/useGet';
import { GlobalStyle } from './styles/GlobalStyle';
import List from './components/List/List';
import Layout from './containers/Layout';
import RocketImage from './components/RocketImage/RocketImage';
import { Header } from './components/Header/Header';
import { filterByYear } from './utils/filterByYear';
import { sortByYear } from './utils/sortByYear';
import ListContainer from './containers/ListContainer';
import Actions from './components/Actions/Actions';
import { Launch } from './types/types';

const App: FunctionComponent = () => {
  const [data, setData] = useState<Launch[] | []>([]);
  const { loading, error, data: items } = useGet('/launches');

  const filterLaunches = (year: number) => {
    if (!items) return;
    const filtered = filterByYear(items, year);
    setData(filtered);
  };

  const sortLaunches = (flag: string) => {
    console.log('flag', flag);
    if (!items) return;
    const sorted = sortByYear(items, flag);
    console.log('sorted', sorted[0].date_utc);
    setData(sorted);
  };

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <RocketImage />

        <ListContainer>
          <Actions
            filterLaunches={filterLaunches}
            sortLaunches={sortLaunches}
          />
          {loading || !data ? <Loader /> : <List listItems={data} />}
        </ListContainer>
      </Layout>
    </>
  );
};

export default App;
