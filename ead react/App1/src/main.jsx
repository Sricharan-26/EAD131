import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import PasswordStrengthChecker from './components/hello'
import './index.css'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)