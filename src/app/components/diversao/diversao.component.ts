import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';
@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta> = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .subscribe((ofertas => (this.ofertas = ofertas)));
  }

}
