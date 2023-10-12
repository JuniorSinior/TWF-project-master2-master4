// api.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드의 URL로 설정
    withCredentials: true, // CORS 설정
});

export default instance;
