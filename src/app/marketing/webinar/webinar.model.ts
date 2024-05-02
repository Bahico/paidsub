export enum TargetAuditory {
    new_users = "new_users",
    all = "all", 
    only_subscribers = "only_subscribers",
    not_prolong_subscriptionn = "not_prolong_subscriptionn", 
    nothing = "nothing"
}

export interface WebinarModel {
    id: number;
    name: string;
    target_auditory: TargetAuditory;
    reg_message: string;
    video_id: number;
    broadcast_type: number;
    broadcast_date: number;
    broadcast_settings: BroadCastSettings;
}

export interface BroadCastSettings {
    broadcast_every: "week" | "month",
    everyDays: number[];
    period: number;
    time: {
        hours: number;
        minuts: number;
    };
    type: number;
}

// broadcast_every
// : 
// "week"
// everyDays
// : 
// [1]
// period
// : 
// 0
// time
// : 
// {hours: 12, minutes: 16}
// type
// : 
// 1