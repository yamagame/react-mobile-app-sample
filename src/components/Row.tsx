import React from 'react'

export type RowProps = {
  center?: boolean
}

export const Row: React.FC<RowProps> = ({
  children,
  center = false,
}) => {
  return (
    <div
      className={`flex flex-row ${
        center ? 'justify-center' : ''
      }`}
    >
      {children}
    </div>
  )
}
