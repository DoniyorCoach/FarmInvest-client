import { Navigate } from 'react-router-dom';

import RegisterPage from '@Pages/RegisterPage';
import LoginPage from '@Pages/LoginPage';
import MainPage from '@Pages/MainPage';
import ShopPage from '@Pages/ShopPage';
import FarmPage from '@Pages/FarmPage';
import ExchangerPage from '@Pages/ExchangerPage';
import BonusPage from '@Pages/BonusPage';
import ProfilePage from '@Pages/ProfilePage';
import HandbookPage from '@Pages/HandbookPage';
import ErrorPage from '@Pages/ErrorPage';

export const authRoutes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/farm',
    element: <FarmPage />,
  },
  {
    path: '/exchenger',
    element: <ExchangerPage />,
  },
  {
    path: '/bonus',
    element: <BonusPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/handbook',
    element: <HandbookPage />,
  },
  {
    path: '/register',
    element: <Navigate to="/" />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
