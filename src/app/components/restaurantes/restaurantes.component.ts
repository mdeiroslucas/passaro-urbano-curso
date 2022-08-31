import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Array<Oferta> = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .subscribe((ofertas => (this.ofertas = ofertas)));
  }

}
