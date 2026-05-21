import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme.css';
import Home from './pages/Home.jsx';
import DeckPage from './pages/DeckPage.jsx';
import { LightboxProvider } from './components/Lightbox.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LightboxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day/:id" element={<DeckPage />} />
        </Routes>
      </LightboxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
