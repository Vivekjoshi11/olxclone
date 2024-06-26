import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.css'
})
export class HelpCenterComponent {

  constructor(
    private router: Router
  ) { }
  navigateTosell(): void {
    this.router.navigate(['sellComponent']);
    console.log('done')
  }
}
