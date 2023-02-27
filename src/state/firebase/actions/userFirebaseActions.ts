import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { UserType } from "../../data_types/UserType";
import { UserRoleType } from "../../data_types/UserRoleType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // users
    const users = [] as UserType[]

    const userQuerySnapshot = getDocs(collection(db, "users"))
    const userRoleQuerySnapshot = getDocs(collection(db, 'userRoles'))
    await userQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
    
            const userClone = {} as UserType
            const assignedUser = Object.assign(doc.data(), userClone) as UserType
            const sortUser = {username: assignedUser.username, fullname: assignedUser.fullname, 
                phone_number: assignedUser.phone_number, email: assignedUser.email, password: assignedUser.password, 
                activity_status: assignedUser.activity_status, user_role_id: assignedUser.user_role_id, 
                custom_role: {id: '',name: ''}} as UserType
            users.push(sortUser)
        });
    })

    await userRoleQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const userRoleClone = {} as UserRoleType
            const assignedUserRole = Object.assign(doc.data(), userRoleClone) as UserRoleType

            users.map((user) => {
                if(user.user_role_id === doc.id)
                {
                    return user.custom_role = {id: doc.id, name: assignedUserRole.name}
                }

                return user
            })
        })
    })

    users.sort((a, b) => {
        return a.username.localeCompare(b.username)
    })

    return users
}
export const Update = () => {}
export const Delete = () => {}