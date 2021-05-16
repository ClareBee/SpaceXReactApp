import { useState, useEffect } from 'react';
import { Launch } from '../../types/types';
import { normaliseData } from '../../utils/dataNormalisation';
import getApi from './get';

export const useGetData = (
  launchesUrl: string,
  rocketsUrl: string,
  reload: boolean
) => {
  const [data, setData] = useState<Launch[] | []>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const launches = getApi(launchesUrl);
    const rockets = getApi(rocketsUrl);
    Promise.all([launches, rockets])
      .then((responses) => {
        setData(normaliseData(responses[0], responses[1]));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [launchesUrl, rocketsUrl, reload]);

  return { data, error, loading };
};
