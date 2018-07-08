import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LocationService {
    private _webUrl = `http://localhost:3000/locations`;

    constructor(private _http: HttpClient) { }

    getLocations(filter: string): Observable<any[]> {
        return this._http.get<any[]>(`${this._webUrl}`);
    }
}