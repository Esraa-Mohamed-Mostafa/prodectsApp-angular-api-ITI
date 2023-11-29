import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getGamesList () {
    return this.http.get<Cards[]>(`https://dummyjson.com/products` , {
    })
  }

  getGameDetails (id: string) {
    return this.http.get<Cards>(`https://dummyjson.com/products/${id}`)
  }
}
