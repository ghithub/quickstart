import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroes/hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './services/hero/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
