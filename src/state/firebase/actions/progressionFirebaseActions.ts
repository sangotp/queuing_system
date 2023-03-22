import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { ProgressionType } from "../../data_types/ProgressionType";
import { ServiceType } from "../../data_types/ServiceType";
import { DeviceType } from "../../data_types/DeviceType";
import { DateTimeType } from "../../data_types/DateTimeType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // Progressions
    const progressions = [] as ProgressionType[]

    const ProgressionquerySnapshot = getDocs(collection(db, "progressions"))
    const ServiceQuerySnapshot = getDocs(collection(db, 'services'))
    const DeviceQuerySnapshot = getDocs(collection(db, 'devices'))
    await ProgressionquerySnapshot.then((result) => {
        result.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            const progressionClone = {} as ProgressionType
            const assignedProgression = Object.assign(doc.data(), progressionClone) as ProgressionType

            // Get Date
            const dateObj = {} as DateTimeType
            const assignDateObj = Object.assign(assignedProgression.grant_time, dateObj) as DateTimeType
            // console.log(assignDateObj.seconds, assignDateObj.nanoseconds)
            const grant_time = new Date(assignDateObj.seconds * 1000) // convert seconds to miliseconds
            // console.log(grant_time)
            const expObj = {} as DateTimeType
            const assignexpDateObj = Object.assign(assignedProgression.expire_time, expObj) as DateTimeType
            const exp_time = new Date(assignexpDateObj.seconds * 1000) // convert seconds to miliseconds

            const sortProgression = { doc_id: doc.id ,id: assignedProgression.id, customer_name: assignedProgression.customer_name, 
                phone_number: assignedProgression.phone_number, email: assignedProgression.email, status: assignedProgression.status,
                supply_id: assignedProgression.supply_id, service_id: assignedProgression.service_id, 
                grant_time: grant_time, expire_time: exp_time, custom_Service: {id: '', name: ''}, custom_Device: { id: '', type: '' } } as ProgressionType
            progressions.push(sortProgression)
        });
    })

    await ServiceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const serviceClone = {} as ServiceType
            const assignedService = Object.assign(doc.data(), serviceClone) as ServiceType
            
            progressions.map((progression) => {
                if(progression.service_id === assignedService.id)
                {
                    return progression!.custom_Service = {id: assignedService.id, name: assignedService.name}
                }

                return progression
            })
        })
    })
    
    await DeviceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const deviceClone = {} as DeviceType
            const assignedDevice = Object.assign(doc.data(), deviceClone) as DeviceType
            progressions.map((progression) => {
                if (progression.supply_id === assignedDevice.id)
                {
                    return progression.custom_Device = {id: assignedDevice.id, type: assignedDevice.type}
                }

                return progression
            })
        })
    })

    progressions.sort((a, b) => {
        return a.id.localeCompare(b.id)
    })

    return progressions
}
export const Update = () => {}
export const Delete = () => {}