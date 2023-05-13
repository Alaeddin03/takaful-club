import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './routes/Landing.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login'
import Programs from './routes/Programs'
import App from './routes/App'
import PrivateRoute from './routes/PrivateRoute'
import Admin from './routes/Admin'
import Driver from './routes/Driver'
import ProgramForm from './routes/ProgramForm'
import Staff from './routes/Staff'
import PostRegistration from './routes/PostRegistration'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/programs',
        element: <Programs />,
      },
      {
        path: '/programs/:id',
        element: <ProgramForm />
      },
      {
        path: '/programs/postregistration',
        element: <PostRegistration />
      }
    ]
  },
  {
    path: '/staff',
    element: <Staff />,
    children: [
      {
        path: '/staff/admin',
        element: <PrivateRoute role={'admin'}><Admin /></PrivateRoute>
      },
      {
        path: '/staff/driver',
        element: <PrivateRoute role={'driver'}><Driver /></PrivateRoute>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
