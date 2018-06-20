import { environment } from './../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transporte } from '../_models/Transporte';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;


  constructor(private authHttp: AuthHttp) { }

  getTransportes(): Observable<Transporte[]> {
    return this.authHttp.get(this.baseUrl + 'transportes')
      .map(response => <Transporte[]>response.json())
      .catch(this.handleError);
  }

  create(model: any) {
    return this.authHttp.post(this.baseUrl + 'transportes/create', model, this.requestOptions())
    .catch(this.handleError);
  }

  private requestOptions() {
    const headers = new Headers({'Content-type': 'application/json'});
    return new RequestOptions({headers: headers});
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

}
