import axios from 'axios';

const env = process.env;

const url =
  env.REACT_APP_USE_LOCAL_API === '1'
    ? env.REACT_APP_LOCAL_API
    : env.REACT_APP_PROD_API;

export const api = axios.create({
  baseURL: url,
});
