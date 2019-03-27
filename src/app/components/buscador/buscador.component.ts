import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})

export class BuscadorComponent implements OnInit {

	heroes:any[] = [];
  constructor(private _heroes_service:HeroesService, private activatedRoute: ActivatedRoute,private router:Router) {

  	this.activatedRoute.params.subscribe(params => {
  		 this.heroes = this._heroes_service.buscarHeroe(params["termino"])
       console.log(this.heroes)		
  	})
   }

  ngOnInit() {
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  }

}
