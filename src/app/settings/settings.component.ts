import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

   alertdelet(): void {
    let txt: string;
    if (confirm("Sure You want to delete Account?")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.innerHTML = txt;
    } else {
        console.error("Element with id 'demo' not found.");
    }
}

logout(): void {
  let txt: string;
  if (confirm("Sure You want to logout?")) {
      txt = "You pressed OK!";
  } else {
      txt = "You pressed Cancel!";
  }
  const demoElement = document.getElementById("demo");
  if (demoElement) {
      demoElement.innerHTML = txt;
  } else {
      console.error("Element with id 'demo' not found.");
  }
}
}
