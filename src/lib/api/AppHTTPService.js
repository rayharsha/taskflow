import axios from "axios";

class AppHTTPService {
    constructor(isMultipartRequest = false) {
        this.#initiate(isMultipartRequest);
        this.#createRequestInterceptor();
        this.#createResponseInterceptor();
    }

    #initiate(isMultipartRequest) {
        this.instance = axios.create({
            baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}`,
            timeout: 180000,
            headers: {
                Accept: "application/json",
                "Content-Type": isMultipartRequest ? "multipart/form-data" : "application/json"
            }
        });
    }

    #createRequestInterceptor() {
        this.instance.interceptors.request.use(config => {
            const headers = {}
            if (localStorage.getItem("token")) {
                headers.authorization = `Bearer ${localStorage.getItem("token")}`
            }
            return {
                ...config,
                headers: headers
            }
        }, error => Promise.reject(error));
    }

    #createResponseInterceptor() {
        this.instance.interceptors.response.use(response => response, error => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/";
            }
            return Promise.reject(error)
        });
    }

    #getResponseData(response) {
        return response.data
    }

    async get(endpoint) {
        return this.instance.get(endpoint).then(this.#getResponseData);
    }

    async post(endpoint, body) {
        return this.instance.post(endpoint, body).then(this.#getResponseData);
    }

    async put(endpoint, body) {
        return this.instance.put(endpoint, body).then(this.#getResponseData);
    }

    async patch(endpoint, body) {
        return this.instance.patch(endpoint, body).then(this.#getResponseData);
    }

    async delete(endpoint) {
        return this.instance.delete(endpoint).then(this.#getResponseData);
    }

}
export default AppHTTPService;
