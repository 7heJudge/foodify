import axios from 'axios';

const rootApi = process.env.REACT_APP_API;

const axiosInstance = axios.create({ baseURL: rootApi });

export default axiosInstance;
