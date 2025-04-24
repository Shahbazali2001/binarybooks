import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/Others/ScrollToTop.jsx'
import TitleUpdate from './components/Title/TitleUpdate.jsx'
import { FilterProvider } from './context/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <FilterProvider>
      <TitleUpdate />
      <ScrollToTop /> 
      <App />
      </FilterProvider>
    </Router>
  </StrictMode>
)
