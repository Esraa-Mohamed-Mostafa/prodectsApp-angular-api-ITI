import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards } from 'src/app/interface/cards';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  // starRating = 3;

  @Input() productItem!: Cards;

  @Output() fromChild = new EventEmitter()
  showDetails(id: number) {
    this.fromChild.emit(id);
    // console.log(id);
  }

  cart: Cards[] = [];
  cartCount: number = 0;
  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );

    this.counterService.getCartCount().subscribe(
      (data) => (this.cartCount = data),
      (error) => console.log(error)
    );
  }

  //3adedt eli mtkrr fi cart
  addToCart() {

    // if (this.cart.filter((e) => e.id === this.productItem.id).length > 0) {
    //   for (const item of this.cart) {
    //     if (item.id == this.productItem.id) {
    //       item.quantity ? '' : (item.quantity = 1);
    //       if (item.quantity < item.stock) {
    //         item.quantity++;
    //         this.cartCount++;
    //       }}}  

    if (this.cart.filter((e) => e.id === this.productItem.id).length > 0) {
      for (const item of this.cart) {
        if (item.id == this.productItem.id) {
          if (item.quantity) {
            item.quantity++;
            this.cartCount++;
          }
          else { item.quantity = 1 }
        }
      }

    } else {
      this.productItem.quantity = 1;
      this.cart.push(this.productItem);
      this.cartCount++;
    }
    this.counterService.setCartCount(this.cartCount);
    this.counterService.setCart(this.cart);
  }
}








