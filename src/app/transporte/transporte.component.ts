import { TransporteService } from './../_services/transporte.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Transporte } from './../_models/Transporte';

@Component( {
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {
  model: Transporte;
  form: FormGroup;
  dummyData = [{ id: 1, name: -'Foo' }, { id: 2, name: 'Bar' }];

  constructor(
    private transporteService: TransporteService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      vehiculo: ['', Validators.required],
      sucursalSalida: ['', Validators.required],
      sucursalLlegada: ['', Validators.required],
      chofer: ['', Validators.required],
      auxiliar: ['', Validators.required],
      tipoTransporte: ['', Validators.required]
    });
  }

  formValidation(controlName: string): boolean {
    const control = this.form.get(controlName);
    return (control.dirty && control.errors) ? true : false;
  }

  create() {
    const vehiculo: AbstractControl = this.form.get('vehiculo');
    const sucursalSalida: AbstractControl = this.form.get('sucursalSalida');
    const sucursalLlegada: AbstractControl = this.form.get('sucursalLlegada');
    const chofer: AbstractControl = this.form.get('chofer');
    const auxiliar: AbstractControl = this.form.get('auxiliar');
    const tipoTransporte: AbstractControl = this.form.get('tipoTransporte');
    if (!this.form.valid) {
      vehiculo.markAsDirty();
      sucursalSalida.markAsDirty();
      sucursalLlegada.markAsDirty();
      chofer.markAsDirty();
      // auxiliar.markAsDirty();
      tipoTransporte.markAsDirty();
    } else {
      this.model = new Transporte(
        Number(vehiculo.value),
        Number(sucursalSalida.value),
        Number(sucursalLlegada.value),
        Number(chofer.value),
        Number(auxiliar.value),
        tipoTransporte.value
      );
      console.log(this.model);
      this.transporteService.create(this.model).subscribe(() => {
        // this.alertify.success('Transporte creado');
        console.log('creado');
      }, error => {
        // this.alertify.error(error);
        console.log(error);
      });
    }    
  }

}
