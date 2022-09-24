import axios from 'axios'
import { baseUrl } from '../../constants/constants';

const apis = axios.create({
    baseURL: baseUrl,
});

export default apis