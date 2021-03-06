# RoutingChildrenAndLogin

## module
``````
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studantRoutingModule } from './app-routing.module';
import { StudantComponent } from './studant.component';
import { StudantFormComponent } from './studant-form/studant-form.component';
import { StudantService } from './studant.service';


@NgModule({
  declarations: [
    StudantComponent,
    StudantFormComponent // importando minha rota
  ],
  imports: [
    CommonModule,
    studantRoutingModule
  ],
  exports: [],
  providers: [StudantService] // declarrando o meu service aqui eu posso usar ele apenas no meu studant

})
export class StudantModule { } // no meu module principal no imports colocar o meu StudantModule
``````

## routing
````

import { StudantFormComponent } from './studant-form/studant-form.component';
import { StudantDetailsComponent } from './studant-details/studant-details.component';
import { StudantComponent } from './studant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const studantesRoutes: Routes = [
  // declarando minhas rotas como rotas filhas. sempre vai mostrar o component pai o um dos filhos
  {path: 'studant', component: StudantComponent, children: [
    {path: 'new', component: StudantFormComponent},
    {path: ':id', component: StudantDetailsComponent},
    {path: ':id/edit', component: StudantFormComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(studantesRoutes)],
  exports: [RouterModule]
})
export class studantRoutingModule { } // essa rota deve ser importada na meu modulo de alunos
````

## Lazing load
- primeira coisa é separa a aplicação em module
- no module raiz
````
const routes: Routes = [
  { path: 'cursos', loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule)},
];
````
- Quando eu uso o lazing loading não posso ter import do meu module em outro lugares
- devo tirar o meu import dos modulos
- dentro do meu routing devo remover o nome principal da minha rota

## Login, Mostrar menu
### classe ts
````
user: User = new User();

  constructor(private service: AuthService) {
  
   }

  ngOnInit(): void {
  }

  doLogin(){
    this.service.doLogin(this.user);
  }
````
### Atributos
``````
export class User {
name= '';
password='';
}
``````
### Service
``````

 private AuthenticatedUser: boolean = false;

  // com esse evento eu mostro o header ou não, no meu ts principal eu uso esse evento
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
``````
### Ts principal
````
 showMenu: boolean = false;

  constructor(private service: AuthService){

  }

  ngOnInit(): void {
    this.service.showMenuEmitter.subscribe(show => {
      this.showMenu = show;
    });
    
  }
``````
### Html onde esta o menu
````
<app-header *ngIf="showMenu"></app-header>
<router-outlet></router-outlet>
``````

## Guarda de Routas
### criar um serviço
````
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
````
### minha classe servico de login
````
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

// metodo responsavel por returna se o usuario esta autenticado ou não
  userIsAuthenticated(){
    return this.AuthenticatedUser; 
  }

}
``````

### rotas
````
const routes: Routes = [
  // vou colocar o canActived em todas as rotas que eu quero que sejam acessadas apenas com o login
  { path: 'studant', loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule), canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent}
];
````

### modulo
````
providers: [AuthService, AuthGuard], // tenho que colocar o meu AuthGuard no meu modulo principal
````

## CanActivatedChild
### CourseGuard
````
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CourseGuard implements CanActivateChild {

  constructor() { }
  
  // quando eu uso o CanActivate preciso implementar esse metodo
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        console.log(route)
        console.log(state)


        // verificando se a url tem o editar e returnando false
        if(state.url.includes("editar")){
            return false;
        }
        return true;
       
    
  }
}
````

### module
````
 providers: [AuthService, AuthGuard, CourseGuard],
````
### routing
````
const routes: Routes = [
  // vou colocar o canActived em todas as rotas que eu quero que sejam acessadas apenas com o login
  { path: 'studant', loadChildren:() => import('./studant/studant.module').then(m => m.StudantModule),
    canActivate:[AuthGuard],
    canActivateChild:[CourseGuard] // se eu quero que todas as rotas recebam essa proteção uso aqui, agora se apenas as filhas uso na rota de alunos
  },
  {path:'login', component: LoginComponent}
];
````

## CanDeactivate Exemplo: usuário deseja sair e perde o que digitou
* service GuardRouting
``````
import { CanDeactivatedComponent } from './can-deactivated/can-deactivated.component';
import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditaComponent } from './canDeactivated/edita/edita.component';

@Injectable()
export class FormRoutingGuard implements CanDeactivate<EditaComponent> {

  canDeactivate(
    component: EditaComponent, // nome do meu componente
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot, 
    ): Observable<boolean> | Promise<boolean> | boolean {
      console.log("canDeactivated")
    //return !component.formChange; // se o form mudou eu não posso mudar a rota
      return component.canChange();
  }
}
``````

* module.ts
``````
providers: [FormRoutingGuard], // posso usar em um escopo local
``````
* Routing.ts
``````
const routes: Routes = [
  {path:'edit', component: EditaComponent,
    canDeactivate: [FormRoutingGuard]
  }
 
];
``````

* Component.html
``````
<form>
    <input type="text" (input)="onInput()"> <!-- escutando um evento de input -->
</form>
<a  routerLink="/">editar</a>
``````

Component.ts
``````
private formChange : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onInput()
{
   this.formChange=true;
   console.log("mudou")

}
   canChange(){
    let leave = confirm('Quero sair');
     if(leave){
      console.log("true")
      return true;
     
     }
     console.log("false")
     return false;
   }
  
``````

## Interface Deactivated routing
* Criando a interface
``````
export interface IFormCanDeactivate {
    canDeactivateRouting(): boolean;
}
``````
* ServiceGuardRouting
`````
import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './Iform-canDeactivated';

@Injectable()
export class FormRoutingGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate, // nome do meu componente
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot, 
    ): Observable<boolean> | Promise<boolean> | boolean {
      console.log("canDeactivated")
       
      return component.canDeactivateRouting();
  }
}
`````
* component.ts
``````
export class EditaComponent implements OnInit, IFormCanDeactivate {


  constructor() { }

  ngOnInit(): void {
  }

canDeactivateRouting(){
    let leave = confirm('Quero sair');
     if(leave){
      console.log("true")
      return true;
     
     }
     console.log("false")
     return false;
   }
  
}
``````
##  Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão
* Service Load
````
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoadService implements CanLoad {

  constructor() { }

  canLoad(route: Route):
  Observable<boolean> | Promise<boolean> | boolean{
    return this.verificar(); // metodo que tem dentro dele a logica de login o mesmo da liberação de menu
  }
}
`````
* Module
````
 providers: [LoadService]
`````
* Routing
````
const routes: Routes = [
  {path:'edit', component: EditaComponent,
    canLoad:[LoadService]
  }
 
];
`````
## Definindo rota padrão e wildcard (rota não encontrada)
* Criar um component que terá o conteúdo de não encontrada
* obs: declara caminho vazio e pagina não encontrada no final da rota
````
  {path:'**', component: NotFoundPage}
`````
* Ou posso redirecionar ele para a pagina de login

## Redirecionamento de rota
** Se a rota estiver vazia
````
{path:'', redirectTO: '/home', patMatch:'full'} 
`````
