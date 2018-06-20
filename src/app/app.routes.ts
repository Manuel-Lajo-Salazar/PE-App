import { TransporteListaResolver } from './_resolvers/transporte-lista.resolver';
import { EntregaComponent } from './entrega/entrega.component';
import { TransporteComponent } from './transporte/transporte.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { TransporteListaComponent } from './transporte-lista/transporte-lista.component';


 const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'transporte', component: TransporteComponent },
        { path: 'transporteLista', component: TransporteListaComponent, resolve: { transportes: TransporteListaResolver } },
        { path: 'entrega', component: EntregaComponent}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

