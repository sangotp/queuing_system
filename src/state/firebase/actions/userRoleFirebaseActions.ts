import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { UserRoleType } from "../../data_types/UserRoleType";
import { UserType } from "../../data_types/UserType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // User Roles
    const userRoles = [] as UserRoleType[]

    const roleQuerySnapshot = getDocs(collection(db, "userRoles"))
    const userQuerySnapshot = getDocs(collection(db, 'users'))
    await roleQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            const userRoleClone = {} as UserRoleType
            const assignedUserRole = Object.assign(doc.data(), userRoleClone) as UserRoleType
            const sortUserRole = { doc_id: doc.id, name: assignedUserRole.name, desc: assignedUserRole.desc, 
                features_authorization: assignedUserRole.features_authorization, user_count: 0 } as UserRoleType
            userRoles.push(sortUserRole)
        });
    })

    await userQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const userClone = {} as UserType
            const assignedUser = Object.assign(doc.data(), userClone) as UserType
            userRoles.map((role) => {
                if (role.doc_id === assignedUser.user_role_id)
                {
                    return role!.user_count! += 1
                }

                return role
            })
        })
    })

    userRoles.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    return userRoles
}
export const Update = () => {}
export const Delete = () => {}