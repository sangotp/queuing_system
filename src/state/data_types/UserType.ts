export type UserType = {
    username: string
    fullname: string
    phone_number: string
    email: string
    password: string
    activity_status: 0 | 1 // 0: Inactive | 1: Active
    user_role_id: string
    custom_role?: {id: string, name: string}
}