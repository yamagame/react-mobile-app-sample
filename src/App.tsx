import React from 'react'
import 'App.css'
import { Login } from 'containers/Login'
import { Top } from 'containers/Top'
import { User } from 'containers/User'
import { SignUp } from 'containers/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route exact path={['/top', '/']}>
          <Top />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
