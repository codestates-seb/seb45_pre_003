import axios from "axios";

const customAxios = axios.create();

customAxios.interceptors.request.use(
    async (req) => {
        const token = localStorage.getItem('usertoken');
        if(token) {
            req.headers['authorization'] = `Bearer ${token}`;
        }
        return req;
    },
    async (err) => {
        return Promise.reject(err);
    }
)

customAxios.interceptors.response.use(
    async (res) => {
        const token = res.headers['authorization']?.split(' ')[1];
        if(token) {
            localStorage.setItem('usertoken',token);
        }
        return res;
    },
    async (err) => {
        return Promise.reject(err);
    }
)

export default customAxios;