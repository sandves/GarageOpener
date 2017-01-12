import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GarageService {
    private openGarageUrl = '/api/garage/open';  // URL to web API

    constructor (private http: Http) {}

    openDoor() : void {
        this.http.post(this.openGarageUrl, null);
    }
}