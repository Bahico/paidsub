import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { MailingsModel, Period } from "./mailings.model";

@Injectable({
    providedIn: "root"
})
export class MailingsService {
    private readonly resourceUrl = getEndpointFor("broadcasting");
    private readonly http = inject(HttpClient)

    mailings() {
        return this.http.get<MailingsModel[]>(this.resourceUrl);
    }

    createManual(data: any) {
        return this.http.post(`${this.resourceUrl}/runManuallyBroadcast`, data)
    }
    createBefore(data: any) {
        return this.http.post(`${this.resourceUrl}/retouchTasks`, data)
    }
    
    createAfter(data: any) {
        return this.http.post(`${this.resourceUrl}/retouchAfterEndSubscription`, data)
    }

    detail(id: number) {
        return this.http.get<MailingsModel>(`${this.resourceUrl}/${id}`)
    }

    period(id: number) {
        return this.http.get<Period[]>(`${this.resourceUrl}/retouchTasks/${id}/period`)
    }

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/retouchTasks/${id}`);
    }
}