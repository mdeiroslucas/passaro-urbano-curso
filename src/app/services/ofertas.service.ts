import { Injectable } from '@angular/core';
import { Oferta } from '../model/oferta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfertasService {

  constructor(private http: HttpClient) {}
  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: 'restaurante',
      titulo: 'Super Burger',
      descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
      anunciante: 'Original Burger',
      valor: 29.9,
      destaque: true,
      imagens: [
        { url: '/assets/ofertas/1/img1.jpg' },
        { url: '/assets/ofertas/1/img2.jpg' },
        { url: '/assets/ofertas/1/img3.jpg' },
        { url: '/assets/ofertas/1/img4.jpg' },
      ],
    },
    {
      id: 2,
      categoria: 'restaurante',
      titulo: 'Cozinha Mexicana',
      descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
      anunciante: 'Mexicana',
      valor: 32.9,
      destaque: true,
      imagens: [
        { url: '/assets/ofertas/2/img1.jpg' },
        { url: '/assets/ofertas/2/img2.jpg' },
        { url: '/assets/ofertas/2/img3.jpg' },
        { url: '/assets/ofertas/2/img4.jpg' },
      ],
    },
    {
      id: 4,
      categoria: 'diversao',
      titulo: 'Estância das águas',
      descricao_oferta:
        'Diversão garantida com piscinas, trilhas e muito mais.',
      anunciante: 'Estância das águas',
      valor: 31.9,
      destaque: true,
      imagens: [
        { url: '/assets/ofertas/3/img1.jpg' },
        { url: '/assets/ofertas/3/img2.jpg' },
        { url: '/assets/ofertas/3/img3.jpg' },
        { url: '/assets/ofertas/3/img4.jpg' },
        { url: '/assets/ofertas/3/img5.jpg' },
        { url: '/assets/ofertas/3/img6.jpg' },
      ],
    },
  ];

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {

      let deu_certo = true;

      if(deu_certo) {
        setTimeout(() => resolve(this.ofertas), 3000);

      } else {
        reject({ codigo_error: 404, mensagem_error: 'Not Found' });
      }
    })
    // .then(( ofertas: Array<Oferta>) => {
    //   console.log('primeiro then');
    //   return ofertas;
    // })
    // .then(( ofertas: Array<Oferta>) => {
    //   console.log('segundo then');
    //   return ofertas;
    // })
  }
}
