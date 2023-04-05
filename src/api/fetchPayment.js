import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/payment`,
});

const getWallet = async () => {
  const { data } = await API.get('/wallet', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

const setWallet = async (wallet) => {
  await API.post(
    '/wallet',
    { wallet },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  );
};

const getBonus = async () => {
  const { data } = await API.get('/bonus', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export { getWallet, setWallet, getBonus };
