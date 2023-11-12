import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import RouterManager from './pages/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterManager />
  </React.StrictMode>,
)
