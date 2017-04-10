import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './routes';


import { MainComponent } from './component';

import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { ShipsPage } from './pages/ships/ships.page';


@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule ,
        HttpModule,
        JsonpModule,
        routing,
    ],
    declarations:
    [
        MainComponent,
        HomePage,
        NotFoundPage,ShipsPage
    ],
    bootstrap: [ MainComponent ],
    providers: [  ]
})
export class AppModule {}
