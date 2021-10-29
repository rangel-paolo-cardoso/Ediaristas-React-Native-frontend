import axios from 'axios';

// const url = 'http://localhost:8080';
const url = 'http://192.168.0.8:8080';

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
});
