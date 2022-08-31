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
    this.ofertasService.getOfertas()
    .subscribe((ofertas =>  (this.ofertas = ofertas)));
  }

    // this.ofertas = this.ofertasService.getOfertas();
  //   this.ofertasService.getOfertas2()
  //   .then(( ofertas: Array<Oferta>) => {
  //     this.ofertas = ofertas

  // })
  // .catch(( error: any ) => {
  //   console.log(error);
  //   });
  // }
}
