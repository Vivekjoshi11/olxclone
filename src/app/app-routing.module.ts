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
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatSafetyTipsComponent } from './chat-safety-tips/chat-safety-tips.component';
import { BuyBillingPackaesComponent } from './buy-billing-packaes/buy-billing-packaes.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { BuyBisinessComponent } from './buy-bisiness/buy-bisiness.component';
import { BillingComponent } from './billing/billing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { PostAdFormComponent } from './post-ad-form/post-ad-form.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';



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
  { path: 'privacy', component: PrivacyComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'chat-safety-tips', component: ChatSafetyTipsComponent },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'Buybillingpackages',
    component: BuyBillingPackaesComponent
  },
  {
    path: 'searchpage',
    component: SearchpageComponent
  },
  {
    path: 'buybisinesspackages',
    component: BuyBisinessComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'help',
    component: HelpCenterComponent
  },
  {
    path: 'ad-sell',
    component: PostAdFormComponent
  },
  {
    path: 'packagedetail',
    component: PackageDetailComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
