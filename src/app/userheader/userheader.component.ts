import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrl: './userheader.component.css'
})
export class UserheaderComponent {

  @Input() isOpen: boolean = false;
  constructor(
    private router: Router
  ) { }
  // ngOnInit(): void {
  // }
  navigateToLogin(): void {
    this.router.navigate(['login']);
    console.log('done')
  }
  navigateTosell(): void {
    this.router.navigate(['sellComponent']);
    console.log('done')
  }
  navigateToMessage(): void {
    this.router.navigate(['messageComponent']);
    console.log('done')
  }
  navigateToViewEdit(): void {
    this.router.navigate(['viewEditProfile']);
    console.log('done')
  }
  navigateToMyads(): void {
    this.router.navigate(['Myads']);
    console.log('done')
  }
  navigateToHome(): void {
    this.router.navigate(['userhome']);
    console.log('done')
  }
  navigateToSettings(): void {
    this.router.navigate(['settings']);
    console.log('done')
  }
  navigateToNuynillpackages(): void {
    this.router.navigate(['Buybillingpackages']);
    console.log('done')
  }
  navigateToBuy_bisiness(): void {
    this.router.navigate(['BuyBisinessComponent']);
    console.log('done')
  }
  navigateToBuybisiness(): void {
    this.router.navigate(['buybisinesspackages']);
    console.log('done')
  }
    navigateToHomemain(): void {
    this.router.navigate(['home']);
    console.log('done')
  }
  
  closePanel() {
    this.isOpen = false;
  }


  
}
