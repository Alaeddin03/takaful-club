import React from 'react'

export default function Glass({ children, className }) {
  return (
    <div className={`${className} bg-[#ffffff33] rounded-2xl shadow-md backdrop-filter	backdrop-blur-sm border border-[#ffffff4d] w-fit`}>
        {children}
    </div>
  )
}
