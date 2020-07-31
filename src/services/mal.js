import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_USE_LOCAL_API
    ? process.env.REACT_APP_LOCAL_API
    : 'https://mal-people-api.herokuapp.com/'
});