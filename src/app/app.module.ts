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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OurServiceComponent,
    OurMissionComponent,
    HowWorksComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
