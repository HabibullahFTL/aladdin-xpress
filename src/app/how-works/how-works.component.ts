import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent implements OnInit {

  order:string = "assets/images/place-order2.svg";
  saveTime:string = "assets/images/save-time.svg";
  safely:string = "assets/images/safely.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
