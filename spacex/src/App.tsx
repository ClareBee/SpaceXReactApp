import { FunctionComponent, useState } from 'react';

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

const App: FunctionComponent = () => {
  const [data, setData] = useState(null);
  const { loading, error, data: items } = useGet('/launches');

  const filterLaunches = (year: number) => {
    const data = filterByYear(items, year);
    setData(data);
  };

  const sortLaunches = (flag: string) => {
    const data = sortByYear(items, flag);
    setData(data);
  };

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RocketImage />
            <ListContainer>
              <Actions
                filterLaunches={filterLaunches}
                sortLaunches={sortLaunches}
              />
              <List listItems={data} />
            </ListContainer>
          </>
        )}
      </Layout>
    </>
  );
};

export default App;
