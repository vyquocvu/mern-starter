import axios from 'axios';

const config = {
  baseURL: process.env.API_URL || '/api/v1.0.0',
};

export default axios.create(config);
