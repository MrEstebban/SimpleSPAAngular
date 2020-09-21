import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  resultadoHeroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService,
              private _router: Router) {   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.resultadoHeroes = this._heroeService.buscarHeroes(params.termino);
    });
  }

}
