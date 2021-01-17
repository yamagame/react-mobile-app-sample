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
        <Route path={`${process.env.PUBLIC_URL}/login`}>
          <Login />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/signup`}>
          <SignUp />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/user`}>
          <User />
        </Route>
        <Route
          exact
          path={[
            `${process.env.PUBLIC_URL}/top`,
            `${process.env.PUBLIC_URL}/`,
          ]}
        >
          <Top />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
