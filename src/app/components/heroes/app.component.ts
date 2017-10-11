import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  //styles: [`div {background-color: white;} .badge {color: red;} .selected{background-color: #CFD8DC; color: white;}`],
  styleUrls: ['./css/style.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  providers: [HeroService];

  onSelect(hero: Hero): void {
    //alert(hero.id);
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes=>this.heroes = heroes);    
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}
