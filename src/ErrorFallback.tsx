import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { Page } from 'stories/Page'
import { Label } from 'stories/Label'
import { Button } from 'stories/Button'
import { Row } from 'components/Row'

const ErrorFallback = (): React.FC<FallbackProps> => {
  const onLogin = () => {}
  const onLogout = () => {}
  const onCreateAccount = () => {}
  return ({ error, resetErrorBoundary }) => {
    return (
      <Page
        hideButton
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      >
        <Row>
          <div className="mt-8">
            <Label label={`${error!.message}`} />
          </div>
        </Row>
        <Row>
          <div className="mt-8">
            <Button
              label="指定ページへ戻る"
              onClick={resetErrorBoundary}
            />
          </div>
        </Row>
      </Page>
    )
  }
}

export default ErrorFallback
