import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {

  // @Input() isOpen: boolean = false;
  // constructor(
  //   private router: Router
  // ) { }

  // megaMenuVisible = false;

  // showMegaMenu() {
  //   this.megaMenuVisible = true;
  // }

  // hideMegaMenu() {
  //   this.megaMenuVisible = false;
  // }
  // navigateTosearchpage(): void {
  //   this.router.navigate(['searchpage']);
  // }
  @Input() isOpen: boolean = false;
  megaMenuVisible = false;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.initializeMenu();
  }

  initializeMenu(): void {
    const menuBtn = document.querySelector(".menu-btn") as HTMLLabelElement;
    const closeBtn = document.querySelector(".close-btn") as HTMLLabelElement;
    const navLinks = document.querySelector(".nav-links") as HTMLUListElement;

    if (menuBtn && closeBtn && navLinks) {
      menuBtn.addEventListener("click", () => {
        navLinks.classList.add("show");
      });

      closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    } else {
      console.error("Menu button, close button, or nav links element not found.");
    }
  }

  showMegaMenu() {
    this.megaMenuVisible = true;
  }

  hideMegaMenu() {
    this.megaMenuVisible = false;
  }

  navigateTosearchpage(): void {
    this.router.navigate(['searchpage']);
  }
    


}
