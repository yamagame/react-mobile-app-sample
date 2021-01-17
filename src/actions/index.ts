import * as Models from 'models'

export type ChangeAppStateAction = {
  type: string
  payload: Models.AppState
}

export const ChangeUserStateAction = 'change state'
export const ChangeUserState = (user: Models.User) => {
  return {
    type: ChangeUserStateAction,
    payload: {
      ...user,
    },
  }
}

export const LogoutAction = 'logout'
export const Logout = () => {
  return {
    type: LogoutAction,
  }
}
