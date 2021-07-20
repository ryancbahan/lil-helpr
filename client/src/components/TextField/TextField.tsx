import React from 'react'
import './styles.css'

export interface TextFieldProps {
  type: string;
  value: string;
  onChange(e: any): void;
  label?: string;
  placeholder?: string;
}

export function TextField ({
  type,
  value,
  onChange,
  label,
  placeholder
}: TextFieldProps) {
  return (
    <>
      {label && <label htmlFor="Input">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="Input"
        placeholder={placeholder}
      />
    </>
  )
}
