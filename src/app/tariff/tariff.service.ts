import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { TariffModel } from "./tariff.model";

@Injectable({
    providedIn: "root"
})
export class TariffService {
    private readonly resourceUrl = getEndpointFor("tariffs");
    private readonly http = inject(HttpClient);

    tariff() {
        return this.http.get<TariffModel[]>(this.resourceUrl);
    }

    create(data: any) {
        return this.http.post(this.resourceUrl, data);
    }

    update(data: any, id: number) {
        return this.http.put(`${this.resourceUrl}/${id}`, data)
    }

    detail(id: number) {
        return this.http.get<TariffModel>(`${this.resourceUrl}/${id}`);
    }

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}