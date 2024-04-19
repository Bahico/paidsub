export interface ResourceModel {
    name: string;
    id: number;
    checked: boolean;
    type: 'channel' | 'group';
}