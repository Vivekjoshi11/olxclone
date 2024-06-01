import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrl: './userheader.component.css'
})
export class UserheaderComponent {

  constructor(
    private router: Router
  ) { }
  // ngOnInit(): void {
  // }
  navigateToLogin(): void {
    this.router.navigate(['login']);
    console.log('done')
  }
}
