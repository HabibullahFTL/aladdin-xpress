import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  convenience:string = "assets/images/conveince.svg";
  saveTime:string = "assets/images/save-time.svg";
  safely:string = "assets/images/safely.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
