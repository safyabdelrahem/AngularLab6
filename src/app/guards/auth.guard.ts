import { CanActivateFn , Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

 let _UserAuthService= inject(UserAuthService)
 let router = inject(Router);
 if (_UserAuthService.getUserLogged()){
  return true;
 }else{
  alert("Sorry You Must Login First");
  router.navigateByUrl("/Login");
  return false;
 }

};
