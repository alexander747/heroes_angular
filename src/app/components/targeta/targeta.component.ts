import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: []
})
export class TargetaComponent implements OnInit {

  @Input() heroe:any=[];
  @Input() index:number;


  @Output() heroeSeleccionado:EventEmitter<any>;

 
  constructor() { 
    this.heroeSeleccionado = new EventEmitter();  
  }

  ngOnInit(): void {

  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.index);
  }

}
