import { API_URL } from "../app.constans";

export const getEndpointFor = (api: string): string => `${API_URL}/${api}`;