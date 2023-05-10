import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  // fixed the width for every page
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      
    </React.StrictMode>,
  </div>
)
