import React from 'react'
import { Button } from 'stories/Button'

export type ThrowButtonProps = {
  errorMessage: string
}

export const ThrowButton: React.FC<ThrowButtonProps> = ({
  errorMessage,
}) => {
  const [count, setCounter] = React.useState(0)
  React.useEffect(() => {
    if (count > 0) {
      throw new Error(errorMessage)
    }
  }, [count, errorMessage])
  const onClick = () => {
    setCounter((c) => c + 1)
  }
  return (
    <Button
      color="text-red-400"
      label="エラーをスロー"
      onClick={onClick}
    />
  )
}
