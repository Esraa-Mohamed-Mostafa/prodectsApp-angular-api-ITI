import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  cartCount : number = 0 ;

  constructor(private counterService: CounterService){}

  ngOnInit(){
    this.counterService.getCartCount().subscribe(
      (data) => this.cartCount = data,
      (error) => console.log(error)
    );
  }


}
