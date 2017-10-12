import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroDetailComponent} from './components/heroes/hero-detail.component';
import{HeroService} from './services/hero/hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
