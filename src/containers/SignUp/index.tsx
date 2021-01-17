import React from 'react'
import * as Models from 'models'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from 'stories/Page'
import { Button } from 'stories/Button'
import { Label } from 'stories/Label'
import { TextField } from 'stories/TextField'
import { useHistory } from 'react-router-dom'
import { ChangeUserState } from 'actions'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'ErrorFallback'
import { ThrowButton } from 'components/ThrowButton'
import { Row } from 'components/Row'

export type SignUpProps = {}

export const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const selector = useSelector<
    Models.AppState,
    Models.AppState
  >((state) => state)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  React.useEffect(() => {
    if (selector.user) {
      history.push('/user')
    }
  }, [selector, history])
  const onLogin = () => {}
  const onLogout = () => {}
  const onCreateAccount = () => {}
  const onNext = () => {
    if (username !== '') {
      dispatch(ChangeUserState({ username }))
    }
  }
  const onCancel = () => {
    history.push('/')
  }
  const onChangeAccountId = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(e.target.value)
  }
  const onChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value)
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback()}
      onReset={() => {
        history.push('/signup')
      }}
    >
      <Page
        hideButton={true}
        user={undefined}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      >
        <Row>
          <div className="mb-8">
            <Label label="SignUp" />
          </div>
        </Row>
        <Row center>
          <TextField
            label="アカウントID"
            onChange={onChangeAccountId}
            value={username}
          />
        </Row>
        <Row center>
          <TextField
            label="パスワード"
            password
            onChange={onChangePassword}
            value={password}
          />
        </Row>
        <Row center>
          <div className="ml-28 mt-8">
            <Button
              primary
              label="ログイン"
              onClick={onNext}
            />
            <Button label="キャンセル" onClick={onCancel} />
          </div>
        </Row>
        <Row center>
          <div className="mt-8">
            <ThrowButton errorMessage="サインアップページでエラー発生" />
          </div>
        </Row>
        <Row center>
          <div className="mt-8">
            <div>
              (アカウントIDに適当な文字を入れるとユーザページへ遷移します)
            </div>
          </div>
        </Row>
      </Page>
    </ErrorBoundary>
  )
}
