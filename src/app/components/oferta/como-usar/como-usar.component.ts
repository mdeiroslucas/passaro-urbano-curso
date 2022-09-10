import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
})
export class ComoUsarComponent implements OnInit {
  comoUsar?: Oferta;
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.parent?.snapshot.params['id'])
    .subscribe(comoUsar => this.comoUsar = comoUsar)
    console.log("acho que n foi encontrado" + this.comoUsar);
  }
}
