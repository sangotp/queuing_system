export type ServiceType = {
    id: string
    name: string
    desc: string
    activity_status: 0 | 1 // 0: Inactive | 1: Active
    progression_rules: number[] // 0: Auto Increment | 1: Prefix | 2: Surfix | 3: Reset Every Day
}