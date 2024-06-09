import { Component } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {

  megaMenuVisible = false;

  showMegaMenu() {
    this.megaMenuVisible = true;
  }

  hideMegaMenu() {
    this.megaMenuVisible = false;
  }
  
}
