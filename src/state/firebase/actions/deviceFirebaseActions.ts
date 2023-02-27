import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { DeviceType } from "../../data_types/DeviceType";
import { ServiceType } from "../../data_types/ServiceType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // devices
    const devices = [] as DeviceType[]

    const deviceQuerySnapshot = getDocs(collection(db, "devices"))
    const serviceQuerySnapshot = getDocs(collection(db, 'services'))

    await deviceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());

        const deviceClone = {} as DeviceType
        const assignedDevice = Object.assign(doc.data(), deviceClone) as DeviceType
        const sorteDevice = {id: assignedDevice.id, type: assignedDevice.type, 
            name: assignedDevice.name, username: assignedDevice.username, password: assignedDevice.password,
        ip: assignedDevice.ip, activity_status: assignedDevice.activity_status, connection_status: assignedDevice.connection_status, 
        services_id: assignedDevice.services_id, customServices: []} as DeviceType
        devices.push(sorteDevice)
        });
    })

    await serviceQuerySnapshot.then((result) => {
        result.forEach((doc) => {
            const serviceClone = {} as ServiceType
            const assignedService = Object.assign(doc.data(), serviceClone) as ServiceType
            devices.map((device) => {
                if(device.services_id.findIndex((service_id) => service_id === assignedService.id) !== -1)
                {
                    device.customServices?.push({id: assignedService.id!, name: assignedService.name})
                }
                return device
            })
        })
    })

    devices.sort((a, b) => {
        return a.id.localeCompare(b.id)
    })

    return devices
}
export const Update = () => {}
export const Delete = () => {}