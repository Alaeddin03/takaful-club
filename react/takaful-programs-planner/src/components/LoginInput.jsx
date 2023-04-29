import React from 'react'

export default function LoginInput({ name, type, text, placeholder, isError, error, value, onChange }) {
    return (
        <div dir='rtl' className='flex flex-col gap-2 text-lg text-primary_blue w-full mb-8'>
            <label htmlFor={name} className=''>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                className='p-1 rounded-lg bg-light_gray outline-offset-4 outline-0 focus:outline-1 outline-primary_blue' />
            <label>
                <span className={isError
                    ? "text-red-800"
                    : "hidden"} >
                    {error}
                </span>
            </label>
        </div>
    )
}
