import React, { useEffect, useState } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import PackOverview from './packs/pack-overview';
import CardOverview from './cards/card-overview';

import './App.css';
import Navigation from './navigation/navigation';
import { Settings } from './settings/settings';
import { Login } from './login/login';
import { Register } from './register/register';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const response = localStorage.getItem('libraToppersUser');
    if(response) {
      const user = JSON.parse(response);
      setIsAdmin(user.user.isAdmin);
    }
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route index path="*" element={<Navigate to="/login"/>} />
        <Route index path="login" element={<Login />} />
        <Route index path="register" element={<Register />} />
        <Route element={<Navigation/>}>
          <Route path="packs" element={<PackOverview />} />
          <Route path="cards" element={<CardOverview />} />
          <Route path="settings" element={(isAdmin ? <Settings /> : <Navigate to="/login"/>)} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
