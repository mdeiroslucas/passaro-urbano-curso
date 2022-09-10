import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopoComponent } from './components/topo/topo.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { RouterModule } from '@angular/router';
import { OfertaComponent } from './components/oferta/oferta.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
