import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SellComponentComponent } from './sell-component/sell-component.component';



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
        { 
          path: 'Profileuser',
           component: UserHomeComponent 
          },
          { 
            path: 'sellComponent',
             component: SellComponentComponent 
            },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
