export interface UtmModel {
    id?: number;
    name: string;
    utm: string;
}

export interface UtmStatistic {
    date: number;
    users_count: number;
    inactive_users_count: number;
    buyed_subs_users_count: number;
    not_prolong_subs_users_count: number;
    finance_stats: {currency: string, amount: number}[];
} 
 
// {
//   "users_count": 0,
//   "inactive_users_count": 0,
//   "buyed_subs_users_count": 0,
//   "not_prolong_subs_users_count": 0,
//   "finance_stats": [
//     {
//       "currency": "string",
//       "amount": 0
//     }
//   ]
// }