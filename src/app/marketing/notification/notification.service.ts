import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { NotificationModel } from "./notification.model";

@Injectable({
    providedIn: "root"
})
export class NotificationService {
    private readonly http = inject(HttpClient);
    
    private resourceUrl(webinarId: number) {
        return getEndpointFor(`webinars/${webinarId}/notifications`);
    }

    notifications(webinarId: number) {
        return this.http.get<NotificationModel[]>(this.resourceUrl(webinarId));
    }

    detail(id: number, webinarId: number) {
        return this.http.get<NotificationModel>(`${this.resourceUrl(webinarId)}/${id}`);
    }

    create(webinarId: number, data: any) {
        return this.http.post(this.resourceUrl(webinarId), data);
    }
    update(webinarId: number, id: number, data: any) {
        return this.http.put(`${this.resourceUrl(webinarId)}/${id}`, data);
    }
}