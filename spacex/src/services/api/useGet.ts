import axios from 'axios';
import { useState, useEffect } from 'react';
const baseUrl = 'https://api.spacexdata.com/v4';

export const useGet = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(baseUrl + url)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};
