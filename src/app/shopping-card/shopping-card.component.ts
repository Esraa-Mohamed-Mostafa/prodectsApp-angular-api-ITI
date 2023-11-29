import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Cards } from '../interface/cards';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent {


  cart: Cards[] = [];
  cartCount: number = 0;
  total: number = 0;
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

    this.calcTotal();
  }
  filter:any;

  removeProduct(index: number) {
    let item: Cards = this.cart[index];
    item.quantity ? '' : (item.quantity = 1);
    this.total -= this.cart[index].price * item.quantity;
    console.log(this.total)
    this.cartCount -= item.quantity;
    
    // this.cart.splice(index, 1);
    this.filter = this.cart.filter((elem: any) => {
      return elem != item;
    })
    this.cart=this.filter;
    

    this.counterService.setCart(this.cart);
    this.counterService.setCartCount(this.cartCount);
  }



  increaseQuantity(item: Cards) {
    if (item.quantity) {
      item.quantity++;
      this.total += item.price;
      this.cartCount++;
    }
    else { item.quantity = 1 }

    // increaseQuantity(item: Cards) {
    //   item.quantity ? item.quantity : (item.quantity = 1);
    //   if (item.quantity < item.stock) {
    //     item.quantity++;
    //     this.total += item.price;
    //     this.cartCount++;
    //   }

    this.counterService.setCart(this.cart);
    this.counterService.setCartCount(this.cartCount);
  }


  decreaseQuantity(item: Cards, index: number) {
    if (item.quantity) {
      if (item.quantity > 1) {
        item.quantity--;
        this.total -= item.price;
        this.cartCount--;
      } else {
        this.removeProduct(index);
      }
    }
    else { item.quantity = 1 }
    this.counterService.setCart(this.cart);
    this.counterService.setCartCount(this.cartCount);
  }

  // decreaseQuantity(item: Cards, index: number) {
  //   item.quantity ? item.quantity : (item.quantity = 1);

  //   if (item.quantity > 1) {
  //     item.quantity--;
  //     this.total -= item.price;
  //     this.cartCount--;
  //   } else {
  //     this.removeProduct(index);
  //   }
  //   this.counterService.setCart(this.cart);
  //   this.counterService.setCartCount(this.cartCount);
  // }

  


  calcTotal() {
    for (let item of this.cart) {
      item.quantity ? (this.total += item.price * item.quantity) : '';
    }
  }





  // 7al 8abi
  // removeitem(i: number) {
  //   this.cardid = this.addcartdata.find((
  //     card: any) => card.id == i
  //   )
  //   this.list = this.addcartdata.filter((elem: any) => {
  //     return elem != this.cardid;
  //   })
  //   console.log(this.list)
  //   this.addcartdata = this.list

  //     this.cardid.removeAt(i);
  // }
  //end



  
}


