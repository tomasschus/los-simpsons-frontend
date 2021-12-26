import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CloudService } from './services/cloud.service';
import { CapituloComponent } from './components/capitulo/capitulo.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './listado/listado.component';
import { SafePipe } from './components/capitulo/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapituloComponent,
    ListadoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CloudService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
