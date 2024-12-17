import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Landing from './components/Landing.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </Router>
  </StrictMode>,
)