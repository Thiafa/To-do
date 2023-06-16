import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        {/* Rotas Privadas */}
        <Route
          path="users"
          element={<ProtectedRoutes>{/* <Navigation /> */}</ProtectedRoutes>}
        />
      </Routes>
    </div>
  );
};

export function ProtectedRoutes({ children }) {
  // const user = localStorage.getItem('x-auth-token');
  let user = 'asd';
  if (user && user !== '') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
