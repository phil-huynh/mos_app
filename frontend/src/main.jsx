import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './ContextStore';
import props from './data.js'

const {blogs, offers, affiliates} = props

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App blogs={blogs}/>
    </ContextProvider>
  </React.StrictMode>,
)
