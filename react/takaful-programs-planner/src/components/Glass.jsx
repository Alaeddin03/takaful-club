import React from 'react'

export default function Glass({ children, className }) {
  return (
    <div className={`glass ${className}`}>
        {children}
    </div>
  )
}
