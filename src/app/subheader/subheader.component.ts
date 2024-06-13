import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {

  @Input() isOpen: boolean = false;
  constructor(
    private router: Router
  ) { }

  megaMenuVisible = false;

  showMegaMenu() {
    this.megaMenuVisible = true;
  }

  hideMegaMenu() {
    this.megaMenuVisible = false;
  }
  navigateTosearchpage(): void {
    this.router.navigate(['searchpage']);
    // console.log('done')
  }
}
