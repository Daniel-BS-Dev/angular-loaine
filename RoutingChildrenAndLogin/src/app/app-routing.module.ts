import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // vou colocar o canActived em todas as rotas que eu quero que sejam acessadas apenas com o login
  { path: 'studant', loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule), canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
