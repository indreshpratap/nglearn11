import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";


export abstract class BaseClient {
    constructor(protected http: HttpClient) {

    }


    get(path: string) {
        return this.http
            .get(this.getUrl(path))
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
        return this.http.post(this.getUrl(path), data);
    }


    abstract getUrl(path: string);
}