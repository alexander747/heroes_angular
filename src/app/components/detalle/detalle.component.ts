import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroeService } from "../../services/heroe.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 @Input() heroedetalle:any = [];
 @Output() refrescar:EventEmitter<boolean>;
 @Output() setLoading:EventEmitter<boolean>;

 id:any;
 like:any;
 dislike:any;
 plike:any;
 pdislike:any; 
 votacion:string="sinvotar";
 eleccionvoto:boolean=true;



  constructor(private servicio:HeroeService) {
    this.refrescar = new EventEmitter();
    this.setLoading = new EventEmitter();
   }

  ngOnInit(): void {
  }

  votar(voto:boolean){
    this.setLoading.emit(true);
    this.votacion='votando';
    this.eleccionvoto=voto;

     this.id = this.heroedetalle.id;
     this.like = this.heroedetalle.likes;
     this.dislike = this.heroedetalle.dislike;
     this.plike = this.heroedetalle.p_likes;
     this.pdislike = this.heroedetalle.p_dislike;
     
    if(voto){
      this.like = Number(this.like)+1;
      this.plike = Math.round( (this.like*100) / (this.like+Number(this.dislike) ));
      this.pdislike = Math.round( (Number(this.dislike)*100) / (this.like+Number(this.dislike)) );

      
    }else{
      this.dislike = Number(this.dislike)+1;
      this.pdislike = Math.round( (this.dislike*100) / (Number(this.like)+this.dislike) );
      this.plike = Math.round( (Number(this.like)*100) / (Number(this.like)+this.dislike ));
    }
  
    this.servicio.votar(this.id.toString(), this.like.toString(), this.dislike.toString(), this.plike.toString(), this.pdislike.toString()).subscribe((data:any)=>{
      this.refrescar.emit(true);
       this.reiniciarDatos();
      if(data.respuesta==='BIEN'){
        this.votacion='votado';
      }else{
        this.votacion='error';
      }
        

     });
  }

  setEstadoVoto(bandera:string){
      this.votacion=bandera;
  }

  reiniciarDatos(){
    this.id="";
    this.like="";
    this.dislike="";
    this.plike="";
    this.pdislike="";
  }


}
