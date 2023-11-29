import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
     const router = inject(Router);

  if (localStorage.getItem('name')) {    
    return true;

  }
  return false

  //router and email and password
  // const router = inject(Router);
  // myobj=JSON.parse(localStorage.getItem('email'))

  // if (localStorage.getItem('email') == "aa@dddd.com") {
  //   console.log(router)
  //   return true
  // }
  // else {
  //   router.navigate(['/registraion']);
  //   return false;
  // }

};

