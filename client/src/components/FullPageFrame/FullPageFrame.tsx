import React from 'react'
import { theme } from '../../theme'

export interface FullPageFrameProps {
  children: React.ReactElement
}

const FrameStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.lighterGrey
}

export function FullPageFrame ({ children }: FullPageFrameProps) {
  return <div style={FrameStyles}>{children}</div>
}
