import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { ReportType } from "../../data_types/ReportType";
import { ProgressionType } from "../../data_types/ProgressionType";
import { ServiceType } from "../../data_types/ServiceType";
import { DeviceType } from "../../data_types/DeviceType";
import { DateTimeType } from "../../data_types/DateTimeType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // reports
    const reports = [] as ReportType[]
    
    // Get Progressions and services
    const progressionQuerySnapshot = getDocs(collection(db, 'progressions'))
    const serviceQuerySnapshot = getDocs(collection(db, 'services'))
    const deviceQuerySnapshot = getDocs(collection(db, 'devices'))
    await progressionQuerySnapshot.then((result) => {
        result.forEach(async(doc) => {

            const progressionObj = {} as ProgressionType
            const assignedProgression = Object.assign(doc.data(), progressionObj)
    
            // Get Date
            const dateObj = {} as DateTimeType
            const assignedDateObj = Object.assign(assignedProgression.grant_time, dateObj) as DateTimeType
            const granted_time = new Date(assignedDateObj.seconds * 1000) // convert second -> millisecond
    
            reports.push({ progression_id: assignedProgression.id, service_id: assignedProgression.service_id, 
            granted_date: granted_time, status: assignedProgression.status, supply_id: assignedProgression.supply_id, custom_service: {id: '', name: ''}, custom_device: {id: '', type: ''} })
        })
    })
    await serviceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const serviceObj = {} as ServiceType
            const assignedService = Object.assign(doc.data(), serviceObj) as ServiceType
            reports.map((report) => {
                if (report.service_id === assignedService.id) {
                    return report!.custom_service = {id: assignedService.id, name: assignedService.name}
                }

                return report
            })
        })
    })

    await deviceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const deviceObj = {} as DeviceType
            const assignedDevice = Object.assign(doc.data(), deviceObj) as DeviceType

            reports.map((report) => {
                if (report.supply_id === assignedDevice.id)
                {
                    return report!.custom_device = {id: assignedDevice.id, type: assignedDevice.type}
                }

                return report
            })
        })
    })

    reports.sort((a ,b) => {
        return a.granted_date.getTime() - b.granted_date.getTime()
    })

    return reports
}
export const Update = () => {}
export const Delete = () => {}