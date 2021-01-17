import React from 'react'
import 'index.css'

export interface ButtonProps {
  primary?: boolean
  color?: string
  backgroundColor?: string
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  color,
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'text-blue-400' : 'text-gray-400'
  return (
    <button
      type="button"
      className={[
        'rounded p-2 px-4 mx-2 border',
        color || mode,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
