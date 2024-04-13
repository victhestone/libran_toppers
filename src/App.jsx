import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import PackOverview from './packs/pack-overview';
import CardOverview from './cards/card-overview';

import './App.css';
import Navigation from './navigation/navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation/>}>
          <Route index path="*" element={<Navigate to="/packs"/>} />
          <Route path="packs" element={<PackOverview />} />
          <Route path="cards" element={<CardOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
