import axios from 'axios';

export default axios.create({
  baseURL: 'https://mal-people-api.herokuapp.com/'
});