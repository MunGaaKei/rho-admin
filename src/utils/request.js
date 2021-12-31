import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_PATH,
    timeout: 8000,
});

export default request;
