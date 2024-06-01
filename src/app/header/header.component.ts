import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private router: Router
  ) { }
  // ngOnInit(): void {
  // }
  navigateToLogin(): void {
    this.router.navigate(['login']);
    console.log('done')
  }
  navigateToUser(): void {
    this.router.navigate(['/Profileuser']);
    console.log('done')
  }
}

