import { services, devices, progressions, roles, users, logs } from "../dummy_data"
import { writeBatch, doc, collection } from "firebase/firestore"
import { db } from "../queuing_system"

export const createFirebaseData = async() => {
    // Auth Docs Id
    const roleDocsId = [] as string[]
    const userDocsId = [] as string[]

    // Get a new write batch
    const batch = writeBatch(db)

    // Set docs to batch

    /* device docs */
    devices.map((device) => {
        const deviceRef = doc(collection(db, 'devices'))
        return batch.set(deviceRef, device)
    })

    console.log('Create Devices Data Done!')

    /* service docs */
    services.map((service) => {
        const serviceRef = doc(collection(db, 'services'))
        return batch.set(serviceRef, service)
    })

    console.log('Create Services Data Done!')

    /* progression docs */
    progressions.map((progression) => {
        const progressionRef = doc(collection(db, 'progressions'))
        return batch.set(progressionRef, progression)
    })

    console.log('Create Progressions Data Done!')

    /* user roles docs */
    roles.map((role) => {
        const roleRef = doc(collection(db, 'userRoles'))
        roleDocsId.push(roleRef.id.toString())
        return batch.set(roleRef, role)
    })

    console.log('Create User Roles Data Done!')

    /* user docs */
    users.map((user, index) => {
        const userRef = doc(collection(db, 'users'))
        userDocsId.push(userRef.id.toString())
        user = {...user!, user_role_id: roleDocsId[index]}
        return batch.set(userRef, user)
    })

    console.log('Create Users Data Done!')

    /* User Activity Log docs */
    logs.map((userLog, index) => {
        const logRef = doc(collection(db, 'userActivityLogs'))
        userLog = {...userLog!, user_id: userDocsId[index]}
        return batch.set(logRef, userLog)
    })

    console.log('Create User Activity Data Done!')

    // Commit batch
    await batch.commit()
}
export const Read = () => {}
export const Update = () => {}
export const Delete = () => {}