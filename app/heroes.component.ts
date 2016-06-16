import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated'

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']
})


export class HeroesComponent implements OnInit {
  
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }

  constructor(private heroService: HeroService,
    private router: Router) { 

  }

  getHeroes() {
    this.heroService.getHeroes().then((result) => this.heroes = result )
  }

  ngOnInit() {
    this.getHeroes();
  }

  gotoDetail() {
    let link = ['HeroDetail', {id: this.selectedHero.id}];
    this.router.navigate(link);
  }
}

