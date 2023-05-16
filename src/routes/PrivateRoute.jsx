import React from 'react'
import { Navigate } from 'react-router-dom'
import { getItem } from '../helpers/helper'

export default function PrivateRoute({children, role}) {
  return (
    <>
        {
            getItem("role") === role
            // true
            ? children 
            : <Navigate to='/login' />
        }
    </>
  )
}
