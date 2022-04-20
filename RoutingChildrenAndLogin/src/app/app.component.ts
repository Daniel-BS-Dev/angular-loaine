import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showMenu: boolean = false;

  constructor(private service: AuthService){

  }

  ngOnInit(): void {
    this.service.showMenuEmitter.subscribe(show => {
      this.showMenu = show;
    });
    
  }
}
