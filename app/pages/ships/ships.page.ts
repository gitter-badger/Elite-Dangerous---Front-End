import { Component, OnInit } from '@angular/core';

import { Http,Response } from '@angular/http';


@Component({
  template: '<div *ngFor="let ship of ships">{{ ship.Name }}</div>',
})




export class ShipsPage implements OnInit {

    ships: any[];

    constructor( private http:Http){
        this.http.get('http://localhost/api/v1/index.php?url=e64fcf96eeba5b5eeaa752101e20a74f/ships').subscribe(
            (response:Response) =>{ this.ships = response.json(); }
        );

    }

  ngOnInit() {}
}
