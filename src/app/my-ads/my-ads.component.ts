import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.css'
})
export class MyAdsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void { }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    // You can add logic here to filter the ads based on the selected filter
  }
}
