import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
