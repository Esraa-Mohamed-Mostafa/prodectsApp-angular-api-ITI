import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CardsparentComponent } from './products/cardsparent/cardsparent.component';

const routes: Routes = [ 
  {
    path: "",
    component: CardsparentComponent, 
   
  },
  {
    path: "card-details/:id",
    component: CardDetailsComponent,

  },

  {
    path: "register",
    component: RegisterComponent,

  },
  {
    path: "login",
    component: LoginComponent,
    // canActivate: [authGuard]


  },
  {
    path: "shopping-card",
    component: ShoppingCardComponent,   

  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





