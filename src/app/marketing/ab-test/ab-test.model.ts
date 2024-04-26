export interface AbTest {
    settings: {
        status: boolean,
        enabled_at: number
        }, 
    a: { 
        users_count: number, 
        users_blocked_count: number, 
        users_subscribed_count: number, 
        cr: number, 
        currencyStats: { 
            currency: string, 
            amount: number 
        }
    }, 
    b: { 
        users_count: number, 
        users_blocked_count: number, 
        users_subscribed_count: number, 
        cr: number, 
        currencyStats: { 
            currency: string, 
            amount: number 
        } 
    } 
}