import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { BaseClient } from "./base.client";

@Injectable({ providedIn: 'root' })
export class ApiClient extends BaseClient {

    constructor(http: HttpClient) {
        super(http);
    }

    getUrl(path: string) {
        return environment.apiPath + path;
    }
}