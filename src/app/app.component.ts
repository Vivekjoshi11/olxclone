import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // title = 'x';
  // router = inject(Router)
   constructor(private router: Router) {}

   ngOnInit() {
    // **Consider using lifecycle hooks:**
    // It's generally recommended to use Angular lifecycle hooks like `ngOnInit`
    // instead of `setTimeout` in the component constructor for routing logic.
    // This ensures proper Angular initialization and avoids potential issues.
    // setTimeout(() => this.router.navigate(['/home']), 1000); // Delay in milliseconds
    this.router.navigate(['/home']);
  }
  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }
}
