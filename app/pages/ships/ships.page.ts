import { Component, OnInit } from '@angular/core';

import { Http,Response } from '@angular/http';


@Component({
  template: '<div *ngFor="let ship of ships">{{ ship.Name }}</div>',
})




export class ShipsPage implements OnInit {

    protected api_key:string = "e64fcf96eeba5b5eeaa752101e20a74f";


    ships: any[];

    constructor( private http:Http){
        this.http.get('http://localhost/ed_backedn/index.php?url='+this.api_key+'/ships').subscribe(
            (response:Response) =>{ this.ships = response.json(); }
        );

    }

  ngOnInit() {}
}
