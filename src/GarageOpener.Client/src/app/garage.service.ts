import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GarageService {

  private openGarageUrl = '/api/garage/open';  // URL to web API
  constructor(private http: HttpClient) { }

  openDoor(): Observable<Object> {
    return this.http.post(this.openGarageUrl, null);
  }

}
