import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (incl. latin-ext for Polish characters) – no Google Fonts requests
import '@fontsource/outfit/300.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/700.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import './styles/global.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
