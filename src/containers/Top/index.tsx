import React from 'react'
import * as Models from 'models'
import { useSelector } from 'react-redux'
import { Page } from 'stories/Page'
import { useHistory } from 'react-router-dom'
import { Label } from 'stories/Label'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'ErrorFallback'
import { ThrowButton } from 'components/ThrowButton'
import { Row } from 'components/Row'

export type TopProps = {}

export const Top: React.FC<TopProps> = () => {
  const history = useHistory()
  const user = useSelector<
    Models.AppState,
    Models.User | undefined
  >((state) => state.user)
  React.useEffect(() => {
    if (user) {
      history.push(`${process.env.PUBLIC_URL}/user`)
    }
  }, [user, history])
  const onLogin = () => {
    history.push(`${process.env.PUBLIC_URL}/login`)
  }
  const onLogout = () => {}
  const onCreateAccount = () => {
    history.push(`${process.env.PUBLIC_URL}/signup`)
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback()}
      onReset={() => {
        history.push(`${process.env.PUBLIC_URL}/top`)
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
            <Label label="Top Page" />
          </div>
        </Row>
      </Page>
      <Row center>
        <div className="mt-8">
          <ThrowButton errorMessage="トップページでエラー発生" />
        </div>
      </Row>
    </ErrorBoundary>
  )
}
