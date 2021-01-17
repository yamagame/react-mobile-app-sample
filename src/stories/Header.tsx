import React from 'react'
import 'index.css'

import { Button } from './Button'

export interface HeaderProps {
  hideButton?: boolean
  user?: {}
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Header: React.FC<HeaderProps> = ({
  hideButton,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className="flex border-b h-20">
      <div className="m-4 text-xl pt-2 sm:inline-block hidden">
        <h1>React-Mobile-App-Sample</h1>
      </div>
      <div className="flex-grow" />
      {hideButton ? null : (
        <div className="m-4">
          {user ? (
            <Button onClick={onLogout} label="Log out" />
          ) : (
            <>
              <Button
                primary
                onClick={onLogin}
                label="Log in"
              />
              <Button
                primary
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      )}
    </div>
  </header>
)
