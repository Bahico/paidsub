import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { WebinarModel } from "./webinar.model";

@Injectable({
    providedIn: "root"
})
export class WebinarService {
    private readonly resourceUrl = getEndpointFor('marketing/webinars');
    private readonly http = inject(HttpClient);

    webinars() {
        return this.http.get<WebinarModel[]>(this.resourceUrl);
    }

    detail(id: number) {
        return this.http.get<WebinarModel>(`${this.resourceUrl}/${id}`)
    }

    create(data: any) {
        return this.http.post(this.resourceUrl, data);
    }

    update(data: any, id: number) {
        return this.http.put(`${this.resourceUrl}/${id}`, data);
    }
    sendVideo(data: any) {
        return this.http.post<{id: number}>(`${this.resourceUrl}/uploadVideo`, data);
    }
}