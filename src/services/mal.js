import axios from 'axios';

const url = parseInt(process.env.REACT_APP_USE_LOCAL_API)
  ? process.env.REACT_APP_LOCAL_API
  : 'https://mal-people-api.herokuapp.com/'

export default axios.create({
  baseURL: url
});