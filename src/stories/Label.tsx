import React from 'react'
import 'index.css'

export interface LabelProps {
  label: string
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export const Label: React.FC<LabelProps> = ({
  label,
  size = 'large',
  color = 'text-gray-600',
  ...props
}) => {
  const fontSize =
    size === 'small'
      ? 'text-xs'
      : size === 'medium'
      ? 'text-xl'
      : 'text-2xl'
  return (
    <div className={`inline-block ${color} ${fontSize}`}>
      {label}
    </div>
  )
}
