import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './features/Error/NotFound';
import NotLogin from './features/Error/NotLogin';
import Home from './features/Home';
import Login from './features/Login/Login';
import Order from './features/Order';
import { useAppSelector } from './redux/hooks';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const authContext = useAppSelector(state => state.userLogin)
  return (
    <>
      <Routes>
        {authContext.isAuthentication && authContext.idToken &&
          (
            <>
              <Route index element={<Home />} />
              <Route element={<Home />} path="/" />
              <Route element={<Order />} path="order/*" />
              <Route element={<NotFound />} path="*" />
            </>
          )
        }
        <Route element={<Login />} path="login" />
        {!authContext.isAuthentication && !authContext.idToken &&
          (
            <>
              <Route element={<NotLogin />} path="*" />
            </>
          )
        }
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
