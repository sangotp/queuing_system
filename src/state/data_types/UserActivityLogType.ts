export type UserActivityLogType = {
    current_activity_time: Date
    ip: string
    action: string
    user_id: string
    custom_user?: {id: string, username: string}
}