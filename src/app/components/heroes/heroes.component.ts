import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

	heroes:any[] = [];

  constructor( private _heroes_service:HeroesService,
  		private router:Router
  	) { 

  }

  ngOnInit() {
  	this.heroes = this._heroes_service.getHeroes();
  	//console.log(this.heroes);
  }

  verHeroe(index:number){
  	this.router.navigate(['/heroe', index]);
  }

}
