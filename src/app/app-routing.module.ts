import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SellComponentComponent } from './sell-component/sell-component.component';
import { MssageComponentComponent } from './mssage-component/mssage-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsNextComponent } from './product-details-next/product-details-next.component';
import { ViewEditProfileComponent } from './view-edit-profile/view-edit-profile.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { UserheaderComponent } from './userheader/userheader.component';



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
  {
    path: 'messageComponent',
    component: MssageComponentComponent
  },
  {
    path: 'productdetailpage',
    component: ProductDetailsNextComponent
  },
  {
    path: 'viewEditProfile',
    component: ViewEditProfileComponent
  },
  {
    path: 'Myads',
    component: MyAdsComponent
  },
  {
    path: 'userhome',
    component: UserHomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
