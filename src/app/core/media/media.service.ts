import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../endpoint";

@Injectable({
    providedIn: "root"
})
export class MediaService {
    private readonly http = inject(HttpClient);
    private readonly resourceUrl = getEndpointFor('marketing/uploadMedia');

    create(data: any) {
        return this.http.post<number[]>(this.resourceUrl, data);
    }
}