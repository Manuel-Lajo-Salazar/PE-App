import { environment } from './../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transporte } from '../_models/Transporte';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthHttp } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;

  private testUrl = `http://localhost:3000`;

  constructor(
    private authHttp: AuthHttp,
    private _http: HttpClient) { }

  getTransportes(): Observable<Transporte[]> {
    return this.authHttp.get(this.baseUrl + 'transportes')
      .map(response => <Transporte[]>response.json())
      .catch(this.handleError);
  }

  create(model: Transporte) {
    return this.authHttp.post(this.baseUrl + 'transportes/create', model, this.requestOptions())
      .catch(this.handleError);
  }

  private requestOptions() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(
      modelStateErrors || 'Server error'
    );
  }


  getVehiculos(filter: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.testUrl}/vehiculos`);
  }

  getSucursales(filter: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.testUrl}/sucursales`);
  }

  getChoferes(filter: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.testUrl}/choferes`);
  }

  getAuxiliares(filter: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.testUrl}/auxiliares`);
  }

  getTiposTransporte(): Observable<any[]> {
    return this._http.get<any[]>(`${this.testUrl}/tiposTransporte`);
  }

  createTransporte(transporte: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this._http.post<any>(`${this.testUrl}/transportes`, transporte, httpOptions);
  }

  getTransporte(id: any): Observable<any> {
    return this._http.get<any>(`${this.testUrl}/transportes/${id}`);
  }

}
