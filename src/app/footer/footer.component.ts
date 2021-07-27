import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  playstore:string = "assets/images/google-play-badge.png";
  appstore:string = "assets/images/Download_on_the_App_Store_Badge.png";

  constructor() { }

  ngOnInit(): void {
  }

}
