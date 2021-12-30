import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ListadoCapitulosComponent } from './listado-capitulos/listado-capitulos.component';
import { TemporadasService } from './services/temporadas.service';
import { CapituloComponent } from './capitulo/capitulo.component';
import { SafePipe } from './capitulo/safe.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoCapitulosComponent,
    CapituloComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TemporadasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
