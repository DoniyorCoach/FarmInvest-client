import axios from 'axios';

import AuthStore from '@Store/UserStore';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
});

const auth = async () => {
  const { data } = await API.get('/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const { message, status } = data;

  if (status === 200) {
    AuthStore.setAuth(true);
    AuthStore.setUser(message.user);
    localStorage.setItem('token', message.token);
  } else {
    localStorage.removeItem('token');
  }
};

const register = async (login, email, password) => {
  const { data } = await API.post('/register', { login, email, password });
  return data;
};

const login = async (email, password) => {
  const { data } = await API.post(
    '/login',
    { email, password },
    {
      withCredentials: true,
    },
  );
  return data;
};
export { register, login, auth };
