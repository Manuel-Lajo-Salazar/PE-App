import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
