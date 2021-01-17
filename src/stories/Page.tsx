import React from 'react'

import { Header } from './Header'
import { Label } from './Label'
import 'index.css'

export interface PageProps {
  hideButton?: boolean
  user?: {}
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Page: React.FC<PageProps> = ({
  hideButton,
  children,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [online, setOnline] = React.useState(true)
  React.useEffect(() => {
    const onChangeState = (e: any) => {
      setOnline(window.navigator.onLine)
    }
    setOnline(window.navigator.onLine)
    window.addEventListener('offline', onChangeState)
    window.addEventListener('online', onChangeState)
    return () => {
      window.removeEventListener('offline', onChangeState)
      window.removeEventListener('online', onChangeState)
    }
  }, [])
  return (
    <article>
      <Header
        hideButton={hideButton}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <section className="container mx-auto mt-4">
        <div className="m-5">
          {online ? (
            <Label
              size="medium"
              color="text-green-400"
              label="オンライン"
            />
          ) : (
            <Label
              size="medium"
              color="text-red-400"
              label="オフライン"
            />
          )}
          {children}
        </div>
      </section>
    </article>
  )
}
