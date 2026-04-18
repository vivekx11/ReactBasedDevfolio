// import file 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// connect to site 
// not so complex
createRoot(document.getElementById('root')).render(
  //root
  <StrictMode>
    <App />
  </StrictMode>,
)
