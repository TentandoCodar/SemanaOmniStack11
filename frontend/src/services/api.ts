import axios from 'axios';

const api = axios.create({
    baseURL: "http://cf5e5a46.ngrok.io"
})

export default api;