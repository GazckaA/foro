import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api.service';  //Se agrega para usar API
import { HttpClientModule } from '@angular/common/http'; //Se agrega para usar API

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule], // Se agrega HttpClientModule
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService], // Se agrega ApiService
  bootstrap: [AppComponent],
})
export class AppModule {}
