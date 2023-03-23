import { combineReducers } from "redux";
import { deviceReducer } from "./deviceReducer";
import { serviceReducer } from "./serviceReducer";
import { progressionReducer } from "./progressionReducer";
import { userRoleReducer } from "./userRoleReducer";
import { userReducer } from "./userReducer";
import { userActivityLogReducer } from "./userActivityLogReducer";
import { reportReducer } from "./reportReducer";
import { PathReducer } from "./global/PathReducer";
import { loginReducer } from "./Login/loginReducer";

export const reducers = combineReducers({
    devices: deviceReducer,
    services: serviceReducer,
    progressions: progressionReducer,
    userRoles: userRoleReducer,
    users: userReducer,
    userActivityLogs: userActivityLogReducer,
    reports: reportReducer,
    paths: PathReducer,
    loginInfo: loginReducer
})

export type reducerTypes = ReturnType<typeof reducers>