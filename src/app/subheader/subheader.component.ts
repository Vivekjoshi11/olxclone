import { Component } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {

  data = [
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" },
  // ... more data
];

selectedValue: any;
}
