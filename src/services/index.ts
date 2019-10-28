import axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000";

class Service {

    private request: AxiosRequestConfig;

    public withAuth(token: string): Service {
        this.request = {
            ...this.request,
            headers: {
                Authorization: token
            }
        };

        return this;
    }

    public withBody(data: any): Service {
        this.request = {
            data: {
                ...data
            }
        };

        return this;
    }

    public get(endpoint: string): AxiosPromise {
        return this.connect("GET", endpoint);
    }

    public delete(endpoint: string): AxiosPromise {
        return this.connect("DELETE", endpoint);
    }

    public post(endpoint: string): AxiosPromise {
        return this.connect("POST", endpoint);
    }

    public put(endpoint: string): AxiosPromise<any> {
        return this.connect("PUT", endpoint);
    }

    private connect(method: Method, endpoint: string): AxiosPromise<any> {
        return axios({
            method,
            ...this.request,
            url: `${API_URL}${endpoint}`,
        });
    }
}

export default (new Service());
