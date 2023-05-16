import React from 'react'

export default function FormInput({ inputName, label, state, setState, type, placeholder, maxLength, pattern }) {
  return (
    <div className="input-box">
      <label htmlFor={inputName}>{label}</label>
      <input 
        value={state} 
        onChange={(e) => setState(e.target.value)} 
        type={type} 
        placeholder={placeholder} 
        name={inputName} 
        maxLength={maxLength} 
        pattern={pattern} 
        required
        />
    </div>
  )
}
