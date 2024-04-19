import { inject, Injectable } from "@angular/core";
import { getEndpointFor } from "../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { ResourceModel } from "./resource.model";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private readonly resourceUrl = getEndpointFor('resources');
    private readonly http = inject(HttpClient);

    resources() {
        return this.http.get<ResourceModel[]>(this.resourceUrl).pipe(
            map(resource => {
                resource.map(item => (item.checked = false))
                return resource
            })
        )
    }
}