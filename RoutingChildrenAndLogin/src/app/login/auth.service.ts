import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AuthenticatedUser: boolean = false;

  // com esse evento eu mostro o header ou não, o meu ts principal eu uso esse evento
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User){
    if(user.name === 'usuario@gmail.com' && user.password === '123456'){
      this.AuthenticatedUser = true;
     
      this.showMenuEmitter.emit(true);

      this.router.navigate(['/studant'])
    }else{
      this.AuthenticatedUser = false;
      this.showMenuEmitter.emit(false);
    }
  }

  userIsAuthenticated(){
    return this.AuthenticatedUser;
  }

}
