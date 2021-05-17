import { FunctionComponent, useState, useEffect } from 'react';

import Layout from './containers/Layout';
import ErrorBoundary from './containers/ErrorBoundary';
import ListContainer from './containers/ListContainer';

import { useGetData } from './services/api/useGetData';
import { filterByYear } from './utils/filterByYear';
import { sortByYear } from './utils/sortByYear';
import { Launch } from './types/types';
import { GlobalStyle } from './styles/GlobalStyle';

import List from './components/List/List';
import { Loader } from './components/Loader/Loader';
import RocketImage from './components/RocketImage/RocketImage';
import { Header } from './components/Header/Header';
import Actions from './components/Actions/Actions';

const App: FunctionComponent = () => {
  const [data, setData] = useState<Launch[] | []>([]);
  const [flag, setFlag] = useState('asc');
  const [reload, setReload] = useState(false);
  const {
    loading,
    error: apiError,
    data: items,
  } = useGetData('/launches', '/rockets', reload);

  // populate from api items on initial load and refreshed data
  useEffect(() => {
    setData(items);
  }, [items]);

  useEffect(() => {
    setData(sortByYear(items, flag));
  }, [items, flag]);

  const filterLaunches = (year: number) => {
    const filtered = filterByYear(items, year);
    setData(filtered);
  };

  const sortLaunches = () => {
    setFlag(flag === 'asc' ? 'des' : 'asc');
  };

  const handleReload = () => {
    // trigger fresh data
    setReload(!reload);
    setFlag('asc');
  };

  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Header handleReload={handleReload} reload={reload} />
      <Layout>
        <RocketImage />
        <ListContainer>
          <Actions
            filterLaunches={filterLaunches}
            sortLaunches={sortLaunches}
            items={items}
            flag={flag}
          />
          {apiError && <div>Something went wrong</div>}
          {loading ? <Loader /> : <List listItems={data} />}
        </ListContainer>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
