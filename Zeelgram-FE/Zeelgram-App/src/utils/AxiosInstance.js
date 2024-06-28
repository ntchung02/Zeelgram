import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://172.20.10.2:8080/api',
  timeout: 20000, 
});

export default AxiosInstance;