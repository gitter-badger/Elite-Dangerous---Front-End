import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { ShipsPage } from './pages/ships/ships.page';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch:'full' },
    { path:'home', component:HomePage },
    { path:'ships', component:ShipsPage },
    { path:'**', component:NotFoundPage }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
