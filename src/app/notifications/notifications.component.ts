import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
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
