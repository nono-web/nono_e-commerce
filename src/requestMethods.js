import axios from 'axios';

const BASE_URL = 'http://api-ecommerce.nonoweb17.fr/api';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFhNWE4Yzg3N2EyNTBiMmFjMzVhYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMzOTc3NDAsImV4cCI6MTY1MzY1Njk0MH0.lPDX4nccvNFZyJgCNxyudmU0u2NhcwBmZMccz_my898';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
