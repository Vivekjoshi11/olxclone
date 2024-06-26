import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-component',
  templateUrl: './sell-component.component.html',
  styleUrl: './sell-component.component.css'
})
export class SellComponentComponent {
 
  categories = [
    { name: 'Cars', icon: 'directions_car' },
    { name: 'Properties', icon: 'home' },
    { name: 'Mobiles', icon: 'smartphone' },
    { name: 'Jobs', icon: 'work' },
    { name: 'Bikes', icon: 'two_wheeler' },
    { name: 'Electronics & Appliances', icon: 'tv' },
    { name: 'Commercial Vehicles & Spares', icon: 'local_shipping' },
    { name: 'Furniture', icon: 'weekend' },
    { name: 'Fashion', icon: 'checkroom' },
    { name: 'Books, Sports & Hobbies', icon: 'sports_esports' }
  ];

  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
    
  }

  constructor(
    private router: Router
  ) { }

  navigateToAd_sell(): void {
    this.router.navigate(['ad-sell']);
    console.log('done')
  }
  
}
