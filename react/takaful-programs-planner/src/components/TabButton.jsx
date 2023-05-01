import React from 'react'

export default function TabButton({onClick, $active, children}) {
  return (
        <button 
            onClick={onClick}
            className={$active
            ? 'text-white bg-primary_blue p-2 rounded-md'
            : 'p-2 rounded-md'
        }>
            {children}
        </button>
    )
}
