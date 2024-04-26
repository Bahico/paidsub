import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { WebinarModel } from "./webinar.model";

@Injectable({
    providedIn: "root"
})
export class WebinarService {
    private readonly resourceUrl = getEndpointFor('webinars');
    private readonly http = inject(HttpClient);

    webinars() {
        return this.http.get<WebinarModel[]>(this.resourceUrl);
    }
}