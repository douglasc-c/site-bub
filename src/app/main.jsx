import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import '../../i18n'
import './index.css'

function Root() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// Renderizar o componente `Root` na raiz do DOM
ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
