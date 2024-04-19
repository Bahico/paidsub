export enum TariffDisplayOption {
    tariff_display_option_disabled = "tariff_display_option_disabled", 
    tariff_display_options_only_for_url_access = "tariff_display_options_only_for_url_access", 
    tariff_display_options_only_for_selected_users = "tariff_display_options_only_for_selected_users", 
    tariff_display_option_not_prolong = "tariff_display_option_not_prolong", 
    tariff_display_option_for_subscribers = "tariff_display_option_for_subscribers",
    tariff_display_option_for_all = "tariff_display_option_for_all"
}

export interface TariffModel {
    id: number;
    name: string;
    description: string;
    is_recurrent: boolean;
    display_position: number;
    display_option: TariffDisplayOption;
    trial: number;
    duration: number;
    price: Price[],
    recources: number[]
}

export interface Price {
    currency: string;
    amount: number;
}