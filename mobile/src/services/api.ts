import axios from 'axios';

const api = axios.create({
    baseURL: 'http://b560eaf0.ngrok.io'
})

export default api;