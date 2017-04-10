import { Component, OnInit } from '@angular/core';

import { Http,Response } from '@angular/http';


@Component({
  templateUrl: './app/pages/ships/ships.page.html',
})




export class ShipsPage implements OnInit {

    protected api_url:string = "http://edbacked";
    protected api_key:string = "/e64fcf96eeba5b5eeaa752101e20a74f";

    ships_data: any[];

    constructor( private http:Http){
        this.http.get(this.api_url+this.api_key+'/ships').subscribe(
            (response:Response) =>{ this.ships_data = response.json(); }
        );

    }

  ngOnInit() {}
}
