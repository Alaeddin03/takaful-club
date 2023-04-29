import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login'
import Programs from './routes/Programs'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/programs',
    element: <Programs />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
