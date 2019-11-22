import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FantaGiocatore} from '../models/fanta-giocatore';

@Injectable({
  providedIn: 'root'
})
export class GiocatoreService {
  baseUrl = 'https://dariocast.altervista.org/fantazama/api/giocatore';

  constructor(private http: HttpClient) { }

  getGiocatori() {
    const url = this.baseUrl + '/getGiocatori.php';
    return this.http.get<FantaGiocatore[]>(url);
  }

  getGiocatrici() {
    const url = this.baseUrl + '/getGiocatrici.php';
    return this.http.get<FantaGiocatore[]>(url);
  }

  getAnimatori() {
    const url = this.baseUrl + '/getAnimatori.php';
    return this.http.get<FantaGiocatore[]>(url);
  }

  getAnimatrici() {
    const url = this.baseUrl + '/getAnimatrici.php';
    return this.http.get<FantaGiocatore[]>(url);
  }
}
