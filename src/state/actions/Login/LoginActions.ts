import { UserLoginType } from "../../data_types"

export enum Actions {
  Login = 'Login',
  Logout = 'Logout',
}

type Login = {
  type: Actions.Login
  payload: UserLoginType
}

type Logout = {
  type: Actions.Logout
  payload: UserLoginType
}


export type ActionTypes = Login | Logout
export const loginInitialState = {isLoggedIn: false} as UserLoginType