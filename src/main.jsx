import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './theme.css';
import Home from './pages/Home.jsx';
import DeckPage from './pages/DeckPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:id" element={<DeckPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
