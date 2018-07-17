import { TransporteService } from './../_services/transporte.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Transporte } from '../_models/Transporte';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class TransporteListaResolver implements Resolve<Transporte[]> {

    constructor(private transporteService: TransporteService,
        private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Transporte[]> {
        return this.transporteService.getTransportes(null).catch(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Observable.of(null);
        });
    }
}
