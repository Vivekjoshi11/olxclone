import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  // goToGoogle(): void {
  //   window.open('https://www.google.com', '_blank');
  // }
  constructor(private router: Router) {}

  // goToHead() {
  //   this.router.navigate(['/home']);
  // }
  
  // ngOnInit(): void {
  // }
  navigateToUser(): void {
    this.router.navigate(['/Profileuser']);
    console.log('done');
  }
  navigateTohome(): void{
    this.router.navigate(['/home']);
    console.log('done');
  }
}
