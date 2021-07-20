import React from 'react'
import './styles.css'

export interface ButtonProps {
  children: string | React.ReactElement;
}

export function Button ({ children }: ButtonProps) {
  return <button className="Button">{children}</button>
}
