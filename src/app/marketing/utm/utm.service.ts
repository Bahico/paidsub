import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { UtmModel, UtmStatistic } from "./utm.model";

@Injectable({
    providedIn: "root"
})
export class UtmService {
    private readonly http = inject(HttpClient);

    private readonly resourceUrl = getEndpointFor("utm");

    utms() {
        return this.http.get<UtmModel[]>(this.resourceUrl);
    }

    create(data: UtmModel) {
        return this.http.post(this.resourceUrl, data);
    }

    detail(id: number) {
        return this.http.get<UtmModel>(`${this.resourceUrl}/${id}`);
    }

    period(name: string) {
        return this.http.get<UtmStatistic>(`${this.resourceUrl}/${name}/stats`);
    }

    periods(name: string) {
        return this.http.get<UtmStatistic[]>(`${this.resourceUrl}/${name}/period_stats`);
    }

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}