export enum BroadcastKind {
    manual,
    buy_before,
    buy_after
}

export interface MailingsModel {
    id: number;
    broadcast_kind: BroadcastKind;
    broadcast_time: number;
    message: string;
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