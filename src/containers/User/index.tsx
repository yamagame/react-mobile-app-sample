import React from 'react'
import * as Models from 'models'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from 'stories/Page'
import { Label } from 'stories/Label'
import { Button } from 'stories/Button'
import { useHistory } from 'react-router-dom'
import * as Actions from 'actions'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'ErrorFallback'
import { ThrowButton } from 'components/ThrowButton'
import { Row } from 'components/Row'

export type UserProps = {}

export const User: React.FC<UserProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector<
    Models.AppState,
    Models.User | undefined
  >((state) => state.user)
  const [counter, setCounter] = React.useState(0)
  React.useEffect(() => {
    if (!user) {
      history.push('/')
    }
  }, [user, history])
  const onLogin = () => {}
  const onLogout = () => {
    dispatch(Actions.Logout())
  }
  const onCreateAccount = () => {}
  const onClick = () => {
    setCounter((c) => c + 1)
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback()}
      onReset={() => {
        setCounter(0)
        history.push('/user')
      }}
    >
      <Page
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      >
        <Row>
          <div className="mb-8">
            <Label label={`User: ${user?.username}`} />
          </div>
        </Row>
        <Row center>
          <Label label={`${counter}`} />
        </Row>
        <Row center>
          <div className="mt-8">
            <Button
              label="カウントアップ"
              onClick={onClick}
            />
          </div>
        </Row>
        <Row center>
          <div className="mt-8">
            <ThrowButton errorMessage="ユーザーページでエラー発生" />
          </div>
        </Row>
      </Page>
    </ErrorBoundary>
  )
}
