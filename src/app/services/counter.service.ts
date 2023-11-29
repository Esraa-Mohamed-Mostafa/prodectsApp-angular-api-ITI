import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cards } from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private cartCount = new BehaviorSubject<number>(0)
  constructor() { }

  getCartCount() {
    return this.cartCount.asObservable();
  }

  setCartCount(newCartCount: number) {
    this.cartCount.next(newCartCount)
  }

  private cart = new BehaviorSubject<Cards[]>([]);
  getCart(){
    return this.cart.asObservable();
  }
  
  setCart(newCart : Cards[]){
    this.cart.next(newCart);
  }
  

}

