import React from 'react'

export interface FullPageFrameProps {
  children: React.ReactElement
}

const FrameStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export function FullPageFrame ({ children }: FullPageFrameProps) {
  return <div style={FrameStyles}>{children}</div>
}
