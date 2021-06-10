import axios from 'axios';
const https = require('https');

const api = axios.create({
    baseURL: 'https://adb.md.utfpr.edu.br/api/data/v2/auth/',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

export default api;