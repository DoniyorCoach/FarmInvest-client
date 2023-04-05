import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { authRoutes, publicRoutes } from '@Utils/routes';

import LoadingPage from '@Pages/LoadingPage/LoadingPage';

import UserStore from '@Store/UserStore';
import PaymentStore from '@Store/PaymentStore';

import { auth } from '@Api/fetchUser';

const Router = observer(() => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await auth();
      await PaymentStore.getWallet();

      setLoading(false);
    })();
  }, []);
  return (
    <BrowserRouter>
      { loading ? (
        <LoadingPage />
      ) : (
        <Routes>
          {UserStore.isAuth
            ? authRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
            : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
      )}
    </BrowserRouter>
  );
});

export default Router;
