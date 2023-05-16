import React from 'react'

export default function ProgramInput({ label, type, pattern, placeholder, maxLength, state, setState}) {
    return (
        <div>
            <label className="label">
                <span className="label-text text-primary">{label}</span>
            </label>
            <input
                onChange={(e) => setState(e.target.value)} 
                value={state} 
                type={type} 
                pattern={pattern}
                placeholder={placeholder} 
                className="input input-bordered input-primary w-full max-w-xs" 
                maxLength={maxLength} 
                required/>
        </div>
    )
}
