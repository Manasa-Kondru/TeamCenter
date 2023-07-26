import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree
    {
       if(window.localStorage.getItem('token'))
          return true;
       else
       {
        this.router.navigate(['/auth/login'])
        window.alert("U don't have permission to view this page");
        localStorage.clear();
          return false ;
       }
       }

}
