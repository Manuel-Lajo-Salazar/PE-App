import { ValueComponent } from './../value/value.component';
import { Component, OnInit } from '@angular/core';
import { Transporte } from '../_models/Transporte';
import { TransporteService } from '../_services/transporte.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transporte-lista',
  templateUrl: './transporte-lista.component.html'
})

export class TransporteListaComponent implements OnInit {
  public transportes: Transporte[] = [];

  constructor( private transporteService: TransporteService,
    private alertify: AlertifyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.loadTransporte();
  }

  loadTransporte() {
    this.route.data.subscribe((data: Transporte[]) => {
      this.transportes = data['transportes'];
    });
    console.log(this.transportes);
    /*
    this.transporteService.getTransportes()
      .subscribe((transportes?: Transporte[]) => {
        this.transportes = transportes;
        console.log(this.transportes);
      }, error => {
        this.alertify.error(error);
      });
      */
  }
}
