import React from 'react'

export default function CenterMainContainer({ children }) {
  return (
    <div className="h-[calc(100vh-176px)] max-md:h-[calc(100vh-224px)]">
        {children}
    </div>
  )
}
