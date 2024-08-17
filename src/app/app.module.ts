import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlansComponent } from './components/card-plans/card-plans.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BenefitComponent } from './components/benefit/benefit.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPlansComponent,
    HeaderComponent,
    CarouselComponent,
    BenefitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
