import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrl: './package-detail.component.css'
})
export class PackageDetailComponent {

  constructor(
    private router: Router
  ) { }
  navigateToPackageDetail(): void {
    this.router.navigate(['sellComponent']);
    console.log('done')
  }
  navigateToUser(): void {
    this.router.navigate(['/Profileuser']);
    console.log('done')
  }
  navigateToHelp(): void {
    this.router.navigate(['help']);
    console.log('done')
  }
}
