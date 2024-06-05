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
  closePanel() {
    this.isOpen = false;
  }
}
