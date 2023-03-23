import { UserLoginType } from "../../data_types"

export enum Actions {
  Login = 'Login',
}

type Login = {
  type: Actions.Login
  payload: UserLoginType
}


export type ActionTypes = Login
export const loginInitialState = {isLoggedIn: false} as UserLoginType