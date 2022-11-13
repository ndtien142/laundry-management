import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './features/Error/NotFound';
import Home from './features/Home';
import Login from './features/Login/Login';
import Order from './features/Order';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="login" />
        <Route element={<Order />} path="order/*" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
