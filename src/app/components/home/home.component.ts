import { Component, OnInit } from '@angular/core';
import { HeroeService } from "../../services/heroe.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  heroes:any[]=[];
  heroe:any[]=[];

  constructor(private servicio:HeroeService) { 

    this.servicio.getHeroes().subscribe((data:any)=>{
     console.log(data);
     this.heroes = data;
     this.heroe = data[0];
    });
  }

  ngOnInit(): void {
  }

  heroeSeleccionado(index:number){
      this.heroe = this.heroes[index];
      
  }

  actualizar(bandera:boolean){
    this.servicio.getHeroes().subscribe((data:any)=>{
      console.log(data);
      this.heroes = data;
      this.heroe = data[0];
     });
  }




}
