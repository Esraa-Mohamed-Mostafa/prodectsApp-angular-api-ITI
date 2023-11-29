import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardsparentComponent } from './cardsparent/cardsparent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from '../hero/hero.component';
import { CategoryComponent } from '../category/category.component';



@NgModule({
  declarations: [
    CardsComponent,
    CardsparentComponent,
    HeroComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,NgbModule,
  ],
  exports: [
    CardsComponent,
    CardsparentComponent
  ],
})
export class ProductsModule { }
