import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class MailingsService {
    private readonly resourceUrl = getEndpointFor("mailings")
    private readonly http = inject(HttpClient)

    mailings() {
        return this.http.get(this.resourceUrl);
    }
}