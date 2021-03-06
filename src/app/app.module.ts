import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';



// rutas
import {ROUTES} from "./app.routes";
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { TargetaComponent } from './components/targeta/targeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HeroedetalleComponent } from './components/heroedetalle/heroedetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetalleComponent,
    TargetaComponent,
    LoadingComponent,
    HeroedetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
