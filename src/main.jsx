import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Starknet from './components/Starknet.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Starknet />} />
        <Route path="/starknet" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>,
)