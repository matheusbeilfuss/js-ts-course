import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.9.100:3001', // usar variável de ambiente aqui
});
