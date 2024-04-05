import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerPage from './pages/customer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerPage />} />
    </Routes>
  );
}

export default AppRoutes;
