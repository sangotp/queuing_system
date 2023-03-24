import { Dispatch } from "redux"
import { Actions } from "../../actions/Login/LoginActions"
import { UserLoginType } from "../../data_types"
import { LoginFirebase } from "../../firebase/actions/Login/loginFirebaseActions"

export const LoginAction = (username: string, password: string) => {
    let userLoginInfo = {} as UserLoginType
    const currentDate = new Date()

    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.Login,
            payload: await LoginFirebase(username, password).then((user) => {
                if (user.length > 0)
                {
                    console.log(user)
                    userLoginInfo = Object.assign({...user, isLoggedIn: true, loginDate: currentDate}, userLoginInfo) as UserLoginType
                }
                else
                {
                    userLoginInfo = {isLoggedIn: false, loginDate: currentDate} as UserLoginType
                }
                console.log(userLoginInfo)
                return userLoginInfo
            })
        })
    }
}

export const LogoutAction = () => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: Actions.Logout,
            payload: {isLoggedIn: false} as UserLoginType
        })
    }
}