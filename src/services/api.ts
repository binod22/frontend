import axios from 'axios';

const API_URL = 'http://localhost:8001/api';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const auth = {
  async login(data: LoginData): Promise<User> {
    const response = await api.post('/auth/login/', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<User> {
    const response = await api.post('/auth/register/', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout/');
  },

  async getUser(): Promise<User> {
    const response = await api.get('/auth/user/');
    return response.data;
  },
};

export const socialAccounts = {
  async list() {
    const response = await api.get('/social-accounts/');
    return response.data;
  },

  async connect(provider: string) {
    const response = await api.post('/social-accounts/', { provider });
    return response.data;
  },

  async disconnect(id: number) {
    await api.delete(`/social-accounts/${id}/`);
  },
};

export const feeds = {
  async getFeed() {
    const response = await api.get('/feeds/');
    return response.data;
  },
};

export default api;
