import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { UserActivityLogType } from "../../data_types/UserActivityLogType";
import { DateTimeType } from "../../data_types/DateTimeType";
import { UserType } from "../../data_types/UserType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // User Activity Log
    const userActivityLogs = [] as UserActivityLogType[]

    const userActivityQuerySnapshot = getDocs(collection(db, "userActivityLogs"))
    const userQuerySnapshot = getDocs(collection(db, 'users'))
    await userActivityQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
    
            const userActivityLogClone = {} as UserActivityLogType
            const assigneduserActivityLog = Object.assign(doc.data(), userActivityLogClone) as UserActivityLogType

            // Get Date
            const dateObj = {} as DateTimeType
            const assignedDateObj = Object.assign(assigneduserActivityLog.current_activity_time, dateObj) as DateTimeType

            const current_activity_date = new Date(assignedDateObj.seconds * 1000) // convert second -> millisecond

            const sortuserActivityLogClone = { current_activity_time: current_activity_date,
            ip: assigneduserActivityLog.ip, action: assigneduserActivityLog.action, 
            user_id: assigneduserActivityLog.user_id } as UserActivityLogType
            userActivityLogs.push(sortuserActivityLogClone)
        });
    })

    await userQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const userObj = {} as UserType
            const assignedUser = Object.assign(doc.data(), userObj) as UserType
            userActivityLogs.map((log) => {
                if (log.user_id === doc.id)
                {
                    return log!.custom_user = {id: doc.id, username: assignedUser.username!}
                }

                return log
            })
        })
    })

    userActivityLogs.sort((a, b) => {

        return a.current_activity_time.getDate() - b.current_activity_time.getDate()
    })

    return userActivityLogs
}
export const Update = () => {}
export const Delete = () => {}