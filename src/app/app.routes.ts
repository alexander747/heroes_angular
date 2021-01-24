import { Routes } from "@angular/router";
import { HeroedetalleComponent } from './components/heroedetalle/heroedetalle.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES:Routes = [
    {path:'home', component:HomeComponent},
    {path:'search', component:SearchComponent},
    {path:'heroedetalle/:id', component:HeroedetalleComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];



