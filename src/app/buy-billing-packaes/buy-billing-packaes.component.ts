import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-buy-billing-packaes',
  templateUrl: './buy-billing-packaes.component.html',
  styleUrl: './buy-billing-packaes.component.css'
})
export class BuyBillingPackaesComponent {
  constructor(
    private router: Router
  ) { }
  navigateToPackageDetail(): void {
    this.router.navigate(['packagedetail']);
    console.log('done')
  }
}
