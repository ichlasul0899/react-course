import axios from 'axios';
import { getCookie } from '../utils/cookie';

function getTokenAuth() {
  if (getCookie('token') !== '' && getCookie('userData') !== '') {
    return JSON.parse(getCookie('token'));
  }
  return '';
}

const createAxiosInterceptor = (url) => {
  const Authorization = `Bearer ${getTokenAuth()}`;

  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      Authorization,
    },
  });
  axiosCreate.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log('Haik cath', Authorization);
      if (error.response.status === 401) {
        window.location.replace('/');
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = createAxiosInterceptor(process.env.REACT_APP_API);

export default BaseService;
