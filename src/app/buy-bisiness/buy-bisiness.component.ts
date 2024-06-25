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
  selectedFilter: string = 'all';
  ads: any[] = [
    {
      title: 'Mobile cover',
      fromDate: 'Jun 24, 24',
      toDate: 'Jul 24, 24',
      price: '₹1,000',
      status: 'pending',
      statusMessage: 'This ad is being processed and it will be live soon',
      image: 'https://statics.olx.in/external/base/img/empty_orders.webp'  // Replace with your actual image path
    }
  ];



  ngOnInit(): void { }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    // You can add logic here to filter the ads based on the selected filter
  }
}
