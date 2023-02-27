import { combineReducers } from "redux";
import { deviceReducer } from "./deviceReducer";
import { serviceReducer } from "./serviceReducer";
import { progressionReducer } from "./progressionReducer";
import { userRoleReducer } from "./userRoleReducer";
import { userReducer } from "./userReducer";
import { userActivityLogReducer } from "./userActivityLogReducer";
import { reportReducer } from "./reportReducer";

export const reducers = combineReducers({
    devices: deviceReducer,
    services: serviceReducer,
    progressions: progressionReducer,
    userRoles: userRoleReducer,
    users: userReducer,
    userActivityLogs: userActivityLogReducer,
    reports: reportReducer
})

export type reducerTypes = ReturnType<typeof reducers>