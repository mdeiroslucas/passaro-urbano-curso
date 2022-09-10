import { Injectable } from '@angular/core';
import { Oferta } from '../model/oferta';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {

  private apiRoot: string = 'http://localhost:3000/';
  public oferta?:Oferta;

  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<Array<Oferta>> {
    return this.http.get<Oferta[]>(this.apiRoot + 'ofertas');
  }

  public getOfertasPorCategoria(categoria: string): Observable<Array<Oferta>> {
    return this.http.get<Oferta[]>(this.apiRoot + '?categoria=' + categoria);
  }

  public getOfertaPorId(id: number): Observable<Oferta> {
    return this.http.get<Oferta>(`${this.apiRoot}ofertas/${id}`);
  }

  public getComoUsarOfertaPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiRoot}como-usar"`)
    .pipe(
      tap((ofertas) => console.log(ofertas))
    )
  }
  public getOndeFicaOfertaPorId(id: number): Observable<any> {
    return this.http.get(this.apiRoot + "onde-fica/?id=" + id)
    .pipe(
      tap((descricao) => console.log("Verificando a descricao " + descricao))
    )
  }
}
