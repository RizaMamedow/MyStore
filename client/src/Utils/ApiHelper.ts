import axios from 'axios';
import {Config} from "./Config";

const Api = axios.create({
    baseURL: Config.BACKEND_URL,
});

export default Api