import axios from 'axios';
const baseUrl = 'https://api.spacexdata.com/v4';
const instance = axios.create();

const get = (url: string) => {
  return instance
    .get(baseUrl + url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export default get;
