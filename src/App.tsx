import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './features/Error/NotFound';
import Home from './features/Home';
import Signin from './features/User/Signin';
import Order from './features/Order';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { useUser } from './features/User/hooks/useUser';

function App() {
  const { user } = useUser();
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) navigate("/login")
  }, [])
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Home />} path='/' />
        <Route element={<Order />} path='order/*' />
        <Route element={<NotFound />} path='*' />
        <Route element={<Signin />} path='login' />
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
