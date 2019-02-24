import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { tap, map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PublicApiClient {
    constructor(private http: HttpClient) {

    }

    get(path: string) {
        return this.http
            .get(this._getUrl(path))
            .pipe(
                tap(data => console.log("Tapping request", data)),
                map(res => {
                    return {
                        data: res
                    }
                }
                ))
    }

    post(path: string, data: any) {
        return this.http.post(this._getUrl(path), data);
    }


    private _getUrl(path: string) {
        return environment.publicApi + path;
    }
}