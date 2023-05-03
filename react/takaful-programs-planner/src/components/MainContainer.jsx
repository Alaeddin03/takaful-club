import React from 'react'

export default function MainContainer({ children, className }) {
    return (
        <div className={`
            min-h-screen w-full pt-36 px-8 bg-gray-400 bg-[url('assets/overlay2.svg')] bg-no-repeat bg-cover bg-center
            ${className}
        `}>
            {children}
        </div>

    )
}
