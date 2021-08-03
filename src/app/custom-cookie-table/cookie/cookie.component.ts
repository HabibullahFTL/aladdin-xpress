import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  keyConsent = 'consent_cookie';
  isShowCookie: boolean = false

  cookie: string = "assets/images/cookie.svg";
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {

    let consentCookie = localStorage.getItem(this.keyConsent);
    console.log(consentCookie);

    setTimeout(() => {
      if (!consentCookie) {
        this.isShowCookie = true;
      } else if (consentCookie == 'accepted' || consentCookie == 'accepted_all') {
        this.isShowCookie = false;
      } else {
        this.isShowCookie = true;
      }
    }, 2000)


  }

  acceptCookie(t: string) {
    localStorage.setItem(this.keyConsent, t);
    this.isShowCookie = false;
  }

  rejectCookie() {
    localStorage.setItem(this.keyConsent, 'rejected');
    this.isShowCookie = true;
  }

}
