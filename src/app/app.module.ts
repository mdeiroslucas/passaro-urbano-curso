import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopoComponent } from './components/topo/topo.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
