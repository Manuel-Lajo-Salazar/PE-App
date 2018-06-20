import { TransporteService } from './../_services/transporte.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component( {
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {
  model: any = {};

  constructor(private transporteService: TransporteService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  create() {
    console.log(this.model);
    this.transporteService.create(this.model).subscribe(() => {
      this.alertify.success('Transporte creado');
    }, error => {
      this.alertify.error(error);
    });
  }

}
