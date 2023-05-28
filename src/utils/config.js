import axios from "axios";

const defaultOptions = {
    // baseURL: "http://localhost:9090",
    baseURL: "http://95.46.96.45:9090",
    headers: {
        'Content-Type': 'application/json',
    },
};

let axiosInstance = axios.create(defaultOptions);

export default axiosInstance;

// export const url = "http://localhost:9090"
export const url = "http://95.46.96.45:9090"