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


  constructor(private servicio:HeroeService) {
    this.refrescar = new EventEmitter();
   }

  ngOnInit(): void {
  }

  votar(voto:boolean){
    console.log(voto);
    
    console.log(this.heroedetalle);

    if(voto){
      this.servicio.votar().subscribe((data:any)=>{
        console.log(data);
        this.refrescar.emit(true);
       });
    }
  }


}
