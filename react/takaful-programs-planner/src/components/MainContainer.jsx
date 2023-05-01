import React from 'react'

export default function MainContainer({ children, className }) {
    return (
        <div className={`landing-main min-h-screen w-full pt-36 px-8 ${className}`}>
            {children}
        </div>

    )
}
