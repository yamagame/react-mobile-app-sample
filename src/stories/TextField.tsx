import React from 'react'
import 'index.css'

export interface TextFieldProps {
  password?: boolean
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({
  password,
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-row justify-center mb-1">
      <div className="inline-block mr-2 pt-2 text-gray-400 text-xl w-32">
        {label}
      </div>
      <input
        className="inline-block border rounded p-2 px-4 mx-2"
        type={password ? 'password' : 'text'}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  )
}
