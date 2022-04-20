import { AuthService } from './auth.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

user: User = new User();

  constructor(private service: AuthService) {
  
   }

  ngOnInit(): void {
  }

  doLogin(){
    this.service.doLogin(this.user);
  }
}
