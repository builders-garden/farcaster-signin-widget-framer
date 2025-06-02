import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignInWidget from './SignInWidget.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignInWidget />
  </StrictMode>,
)
