import axios from 'axios';
import https from 'https';
import { config } from '../../config';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const axiosSapInstance = axios.create({
  baseURL: config.SAP_URL,
  headers: { 'Content-Type': 'application/json' },
  httpsAgent: agent,
  withCredentials: true,
});
