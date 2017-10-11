import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/heroes/app.component';
import {HeroDetailComponent} from './components/heroes/hero-detail.component';
import{HeroService} from './services/hero/hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroDetailComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
