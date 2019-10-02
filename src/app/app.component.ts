import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heading: string;
  names: { name: string; age: string}[];
  setClickedRow: number = null;
  constructor() {
      this.heading = "Please click below row";
      this.names = [{
          name : "Malcum",
          age: "23",
      },
      {
          name : "jhon",
          age: " 30",
      },
      {
          name : "rudy",
          age: "22",
      },
      {
          name : "mathew",
          age: "34",
      }];
    }

    setClickedRow(index){
        this.selectedRow = index;
    }
  }
