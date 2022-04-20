import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private route: Router) { }
  
  // quando eu uso o CanActivate preciso implementar esse metodo
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(this.service.userIsAuthenticated()){
        return true;
      }

      this.route.navigate(['/login'])// se o usuario não estiver logado vou força ele a voltar a pagina de login
      return false;
  }
}
