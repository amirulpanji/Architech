import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage'
import LearnMore from './pages/LearnMore'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/build" element={<App />} />
      <Route path="/learn-more" element={<LearnMore />} />
    </Routes>
  </BrowserRouter>
)
