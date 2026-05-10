import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Assignment2/Home.jsx'
import OnClick from './Event_Handling/OnClick.jsx'
import OnClick_passingAurg from './Event_Handling/OnClick_passingAurg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <OnClick /> */}
    <OnClick_passingAurg />
  </StrictMode>,
)
