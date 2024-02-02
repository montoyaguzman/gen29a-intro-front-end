import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Card } from './Card/Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
)
