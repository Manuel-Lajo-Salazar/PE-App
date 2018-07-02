import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { APP_ROUTING } from './app.routes';
import { ValueComponent } from './value/value.component';
import { TransporteComponent } from './transporte/transporte.component';
import { EntregaComponent } from './entrega/entrega.component';
import { TransporteService } from './_services/transporte.service';
import { TransporteListaComponent } from './transporte-lista/transporte-lista.component';
import { TransporteListaResolver } from './_resolvers/transporte-lista.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { DropdownModule } from 'angular-dropdown-component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ValueComponent,
    TransporteComponent,
    EntregaComponent,
    TransporteListaComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    APP_ROUTING,
    AuthModule,
    DropdownModule
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    TransporteService,
    TransporteListaResolver
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
