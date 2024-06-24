import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-bisiness',
  templateUrl: './buy-bisiness.component.html',
  styleUrl: './buy-bisiness.component.css'
})
export class BuyBisinessComponent {

  @Input() isOpen: boolean = false;
  constructor(
    private router: Router
  ) { }
  selectedTab: string = 'active';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  navigateToBilling(): void {
    this.router.navigate(['billing']);
    console.log('done')
  }
  navigateToBuybisiness(): void {
    this.router.navigate(['buybisinesspackages']);
    console.log('done')
  }
  navigateToInvoices(): void {
    this.router.navigate(['invoices']);
    console.log('done')
  }
}
