import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-details-next',
  templateUrl: './product-details-next.component.html',
  styleUrl: './product-details-next.component.css'
})
export class ProductDetailsNextComponent {
  images: string[] = [  // Replace with your image URLs
    'https://th.bing.com/th/id/R.561760fba7bfb58c9dd32edfc60b17c2?rik=aw38qRbB2djsUg&riu=http%3a%2f%2fadvanced-television.com%2fwp-content%2fuploads%2f2013%2f03%2fLG100.jpg&ehk=x3FMj6noaEhREUlPzBmJLXMNKc7BQjbh5U80Kttl7Gc%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.lOKplEUCJU94TLiD3EtmjAHaHa?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.HzunTto4bE4iBFHf_yiJ8wHaE8?rs=1&pid=ImgDetMain'
  ];
  currentIndex: number = 0;
  isButtonVisible: boolean = false;

  constructor() { }

  ngOnInit() { }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      this.isButtonVisible = true;
    } 
    else {
      this.isButtonVisible = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isButtonVisible = false;
  }


}
