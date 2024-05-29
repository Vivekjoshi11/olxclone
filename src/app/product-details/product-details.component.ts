import { Component } from '@angular/core';

interface Item {
  featured: boolean;
  image: string;
  price: string;
  details: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  items: Item[] = [
    {
      featured: true,
      image: 'https://i.pinimg.com/originals/53/8e/7c/538e7cc2908a57f0277bcfb134944668.jpg',
      price: '₹ 97,00,000',
      details: '4 Bds - 4 Ba - 2400 ft²',
      location: 'KERALAPURAM, KOLLAM',
      date: 'MAY 20'
    },
    {
      featured: true,
      image: 'https://driver.pk/wp-content/uploads/2021/02/d.jpg',
      price: '₹ 3,10,000',
      details: '2014 - 88000.0 km',
      location: 'SECTOR 10, NOIDA',
      date: 'MAR 31'
    },
    {
      featured: false,
      image: 'https://th.bing.com/th/id/OIP.mraRfdAvG0JglLeIf1-ShgHaFj?rs=1&pid=ImgDetMain',
      price: '₹ 22,500',
      details: 'Samsung s23 ultra with bill, box in reasonable price.',
      location: 'SAMUDRAPUR, MAHARASHTRA',
      date: 'APR 25'
    },
    {
      featured: false,
      image: 'https://cdn.mos.cms.futurecdn.net/tFrwgeZw6gjTLKfnGQBGq9-320-80.jpg',
      price: '₹ 29,500',
      details: 'Selling my 6 months old iPhone 13. New condition.',
      location: 'SAMUDRAPUR MIDC, MAHARASHTRA',
      date: '3 DAYS AGO'
    },
    {
      featured: false,
      image: 'https://th.bing.com/th/id/OIP.VNKlQyzVgkSkRvnmJbNMtQHaF2?rs=1&pid=ImgDetMain',
      price: '₹ 1,35,00,000',
      details: 'Mercedes-Benz GLS 400d 4MATIC, 2023 - 29000.0 km',
      location: 'ZIRAKPUR PANCHKULA KALKA HIGHWAY',
      date: 'MAY 17'
    },
    {
      featured: false,
      image: 'https://media.mahindrafirstchoice.com/live_web_images/usedcarsimg/mfc/485/362200/front_right_view-20191102113804.jpg',
      price: '₹ 10,45,000',
      details: 'Maruti Suzuki Ciaz Alpha 1.5 AT, 2021 - 55000.0 km',
      location: 'ZIRAKPUR PANCHKULA KALKA HIGHWAY',
      date: 'MAY 17'
    },
    {
      featured: false,
      image: 'https://i.pinimg.com/originals/53/8e/7c/538e7cc2908a57f0277bcfb134944668.jpg',
      price: '₹ 1,250',
      details: '1 Bds - 1 Ba - 40 ft²',
      location: 'SAMUDRAPUR, MAHARASHTRA',
      date: 'TODAY'
    }
  ];
}
