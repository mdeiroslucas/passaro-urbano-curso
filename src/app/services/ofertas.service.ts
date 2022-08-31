import { Injectable } from '@angular/core';
import { Oferta } from '../model/oferta';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {

  private apiRoot: string = 'http://localhost:3000/ofertas';
  constructor(private http: HttpClient) {}

  // public getOfertas(): Promise<Array<Oferta>> {
  //   return this.http.get(this.apiRoot)
  //   .toPromise()
  //   .then((response: any) => response.json());
  // }
  public getOfertas(): Observable<Array<Oferta>> {
    return this.http.get<Oferta[]>(this.apiRoot + '?destaque=true');
  }

  public getOfertasPorCategoria(categoria: string): Observable<Array<Oferta>> {
    return this.http.get<Oferta[]>(this.apiRoot + "?categoria=" + categoria);
  }
  // public ofertas: Array<Oferta> = [
  //   {
  //     id: 1,
  //     categoria: 'restaurante',
  //     titulo: 'Super Burger',
  //     descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
  //     anunciante: 'Original Burger',
  //     valor: 29.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/1/img1.jpg' },
  //       { url: '/assets/ofertas/1/img2.jpg' },
  //       { url: '/assets/ofertas/1/img3.jpg' },
  //       { url: '/assets/ofertas/1/img4.jpg' },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     categoria: 'restaurante',
  //     titulo: 'Cozinha Mexicana',
  //     descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
  //     anunciante: 'Mexicana',
  //     valor: 32.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/2/img1.jpg' },
  //       { url: '/assets/ofertas/2/img2.jpg' },
  //       { url: '/assets/ofertas/2/img3.jpg' },
  //       { url: '/assets/ofertas/2/img4.jpg' },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     categoria: 'diversao',
  //     titulo: 'Estância das águas',
  //     descricao_oferta:
  //       'Diversão garantida com piscinas, trilhas e muito mais.',
  //     anunciante: 'Estância das águas',
  //     valor: 31.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/3/img1.jpg' },
  //       { url: '/assets/ofertas/3/img2.jpg' },
  //       { url: '/assets/ofertas/3/img3.jpg' },
  //       { url: '/assets/ofertas/3/img4.jpg' },
  //       { url: '/assets/ofertas/3/img5.jpg' },
  //       { url: '/assets/ofertas/3/img6.jpg' },
  //     ],
  //   },
  // ];


  // public getOfertas2(): Promise<Array<Oferta>> {
  //   return new Promise((resolve) => {

  //       resolve(this.ofertas);

  //   })
    // .then(( ofertas: Array<Oferta>) => {
    //   console.log('primeiro then');
    //   return ofertas;
    // })
    // .then(( ofertas: Array<Oferta>) => {
    //   console.log('segundo then');
    //   return ofertas;
    // })
}

