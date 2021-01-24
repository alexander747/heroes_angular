import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HeroeService } from "../../services/heroe.service"; 

@Component({
  selector: 'app-heroedetalle',
  templateUrl: './heroedetalle.component.html',
  styleUrls: ['./heroedetalle.component.css']
})
export class HeroedetalleComponent implements OnInit {
    id:any="";
    avatar:any="";
    descripcion:any="";
    likes:any="";
    dislike:any="";
    plike:any="";
    pdislike:any="";
    nombre:any="";


  constructor(private ruta:ActivatedRoute, private servicio:HeroeService) { 
    this.ruta.params.subscribe(parametros=>{
      this.servicio.getHeroe((parametros['id']).toString()).subscribe(data=>{
        console.log(data['data'][0]);
        var datos = data['data'][0];
         this.avatar = datos.avatar;
         this.id = datos.id;
         this.descripcion = datos.description;
         this.likes = datos.likes;
         this.dislike = datos.dislike;
         this.plike = datos.p_likes;
         this.pdislike = datos.p_dislike;
         this.nombre = datos.name;
      });
      
    });
  }

  ngOnInit(): void {
    
  }

}
