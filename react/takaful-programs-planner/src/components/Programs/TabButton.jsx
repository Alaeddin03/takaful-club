import React from 'react'

export default function TabButton({onClick, $active, children}) {
  return (
        <button 
            onClick={onClick}
            className={$active
            ? 'text-white bg-primary_blue p-2 rounded-md transition-colors outline-none'
            : 'p-2 rounded-md hover:bg-primary_gray focus:bg-primary_gray transition-colors outline-none'
        }>
            {children}
        </button>
    )
}
