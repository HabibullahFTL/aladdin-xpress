import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {

  playstore:string = "assets/images/google-play-badge.png";
  appstore:string = "assets/images/Download_on_the_App_Store_Badge.png";

  constructor() { }

  ngOnInit(): void {
  }

}
