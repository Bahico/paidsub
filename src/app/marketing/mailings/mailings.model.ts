export enum BroadcastKind {
    manual,
    buy_before,
    buy_after
}

export enum TargetAuditory {
    all = "all",
    only_subscribers = "only_subscribers",
    not_prolong_subscriptionn = "not_prolong_subscriptionn"
}

export interface MailingsModel {
    id: number;
    broadcast_kind: BroadcastKind;
    broadcast_time: number;
    message: string;
    target_auditory: TargetAuditory;
    attachment: number;
    keyboard_settings: any;
    name: string;
    time: number;
}

export interface Period {
    time: number;
    broadcasted: number;
    buyed: number;
}