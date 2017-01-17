import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GarageService {
    private openGarageUrl = '/api/garage/open';  // URL to web API

    constructor (private http: Http) {}

    openDoor() : Observable<Response> {
        return this.http.post(this.openGarageUrl, null).map(res => res.json());
    }
}