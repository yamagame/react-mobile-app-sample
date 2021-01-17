import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import {
  createStore as reduxCreateStore,
  Reducer,
} from 'redux'
import { AppState } from 'models'
import * as Actions from 'actions'

const initialAppState = {
  user: undefined,
}

export const appState: Reducer<
  AppState,
  Actions.ChangeAppStateAction
> = (state, action) => {
  if (state) {
    switch (action.type) {
      case Actions.ChangeUserStateAction:
        return {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
        } as AppState
      case Actions.LogoutAction: {
        const s = { ...state }
        delete s.user
        return s
      }
      default:
        return state
    }
  }
  return initialAppState
}

const store = reduxCreateStore(appState, initialAppState)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
