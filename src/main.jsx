import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import Cursor from './components/common/Cursor.jsx'
import ParticleCanvas from './components/common/ParticleCanvas.jsx'
import AmbientMotion from './components/common/AmbientMotion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Cursor />
      <ParticleCanvas />
      <AmbientMotion />
      <Stairs />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
