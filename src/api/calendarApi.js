import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_ENV_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_ENV_URL,
});

//TODO: configurar interceptores

calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  };
  return config;
});

export default calendarApi;
