import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router-deprecated';

@Component({
	selector : 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	
	heroes : Hero[] = [];
	constructor(private heroService: HeroService,
		private router: Router) { 

  	}

	getHeroes() {
		this.heroService.getHeroes().then(result => this.heroes = result.slice(1, 5));
	}

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', {id: hero.id}];
		this.router.navigate(link);
	}
}	