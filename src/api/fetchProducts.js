import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/products`,
});

const getAllProducts = async () => {
  const { data } = await API.get('', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

const getUserProducts = async () => {
  const { data } = await API.get('/user', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

const buyProduct = async (productId) => {
  const { data } = await API.post(
    '/buy',
    { productId },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  );
  return data;
};

const collectIncome = async () => {
  const { data } = await API.get('/collect', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return data;
};

export { getAllProducts, getUserProducts, buyProduct, collectIncome };
