import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(valor: string): void{
    this._router.navigate(['/buscar', valor]);
  }

}
