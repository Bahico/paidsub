import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { AbTest } from "./ab-test.model";

@Injectable({
    providedIn: "root"
})
export class AbTestService {
    private readonly http = inject(HttpClient);
    private readonly resourceUrl = getEndpointFor('ab');

    settings() {
        return this.http.get<AbTest>(`${this.resourceUrl}/getSettings`);
    }

    reset() {
        return this.http.put(`${this.resourceUrl}/settings`, {"reset": true, "state": true});
    }
    
    edit(type: "a" | "b", data: any) {
        return this.http.put(`${this.resourceUrl}/${type}`, data);
    }
}