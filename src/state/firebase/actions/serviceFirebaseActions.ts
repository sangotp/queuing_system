import { collection, getDocs } from "firebase/firestore";
import { db } from "../queuing_system";
import { ServiceType } from "../../data_types/ServiceType";

export const Create = () => {}
export const ReadFirebaseData = async() => {
    // services
    const services = [] as ServiceType[]

    const querySnapshot = await getDocs(collection(db, "services"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        const serviceClone = {} as ServiceType
        const assignedService = Object.assign(doc.data(), serviceClone) as ServiceType
        const sortService = {id: assignedService.id, name: assignedService.name, desc: assignedService.desc, 
        activity_status: assignedService.activity_status, progression_rules: assignedService.progression_rules} as ServiceType
        services.push(sortService)
    });

    services.sort((a, b) => {
        return a.id.localeCompare(b.id)
    })

    return services
}
export const Update = () => {}
export const Delete = () => {}