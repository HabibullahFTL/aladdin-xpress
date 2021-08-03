import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './custom-cookie-table/home/home.component';
import { CookieComponent } from './custom-cookie-table/cookie/cookie.component';
import { TableComponent } from './custom-cookie-table/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OurServiceComponent,
    OurMissionComponent,
    HowWorksComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    CookieComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
