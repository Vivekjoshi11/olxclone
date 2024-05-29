import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  // { path: 'login', loadComponent: () => import('./loginpage/loginpage.compone bnt').then(m => m.LoginpageComponent) },
  { 
    path: 'login',
     component: LoginpageComponent 
    },
    { 
      path: 'header',
       component: HeaderComponent 
      },
      { 
        path: 'home',
         component: HomeComponent 
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
