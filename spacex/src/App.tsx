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
  const [reload, setReload] = useState(false);
  const { loading, error, data: items } = useGet('/launches', reload);
  // populate from api items on initial load
  useEffect(() => {
    if (items.length > 0 && data.length === 0) {
      setData(items);
    }
  }, [items]);

  const filterLaunches = (year: number) => {
    if (!items) return;
    const filtered = filterByYear(items, year);
    setData(filtered);
  };

  const sortLaunches = (flag: string) => {
    if (!items) return;
    const sorted = sortByYear(items, flag);
    setData(sorted);
  };

  const handleReload = () => {
    // trigger fresh data
    setReload(!reload);
  };

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <GlobalStyle />
      <Header handleReload={handleReload} />
      <Layout>
        <RocketImage />
        <ListContainer>
          <Actions
            filterLaunches={filterLaunches}
            sortLaunches={sortLaunches}
          />
          {loading ? <Loader /> : <List listItems={data} />}
        </ListContainer>
      </Layout>
    </>
  );
};

export default App;
