import axios from "axios";
import Message from "@/components/message";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_PATH,
    timeout: 8000,
});

request.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        Message(
            `<i class="ri-error-warning-fill" style="margin-right: 8px; color: #ff5b5b; font-size: 1.2em;"></i> 接口请求出错`
        );
        return false;
    }
);

export default request;
