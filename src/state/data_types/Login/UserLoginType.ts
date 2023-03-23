import type { UserType } from "../UserType"

export type UserLoginType = {
  isLoggedIn: boolean
  loginDate: Date
} & UserType | undefined