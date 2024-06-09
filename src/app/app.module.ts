import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponent } from './footer/footer.component';
// import { HomComponent } from './hom/hom.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductDetailsNextComponent } from './product-details-next/product-details-next.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SellComponentComponent } from './sell-component/sell-component.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'; // For mat-b
import { MatListModule } from '@angular/material/list';
import { MssageComponentComponent } from './mssage-component/mssage-component.component';
import { FormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HeaderComponent,
    LoginpageComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailsNextComponent,
    ProfileHeaderComponent,
    SellComponentComponent,
    UserheaderComponent,
    UserHomeComponent,
    MssageComponentComponent,
    AdvertisementComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule ,
    BrowserAnimationsModule, // Required for Angular Material
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
