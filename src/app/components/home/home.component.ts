import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {


  public ofertas: Array<Oferta> = [];


  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getOfertas();
  }

}
