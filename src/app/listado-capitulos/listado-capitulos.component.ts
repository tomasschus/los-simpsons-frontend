import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-capitulos',
  templateUrl: './listado-capitulos.component.html',
  styleUrls: ['./listado-capitulos.component.css']
})
export class ListadoCapitulosComponent implements OnInit {

  @Input() allCapitulos;
  @Output() seleccion = new EventEmitter()
  temporadas = {}
  keysTemporadas = []
  capitulos = []
  portadas = {}

  constructor() { }

  ngOnInit(): void {    
  }

  loadData(){
    this.allCapitulos.forEach(element => {
       // separo por temporadas
       let temp = element.name.split(" ")[1].split("x")[0] 
       if (this.temporadas[temp]==null){
        this.temporadas[temp] = []
       }
       this.temporadas[temp].push(element)
       /*if(element.mimeType.includes("video")){
         aux.push(element)
       }
       if(element.mimeType.includes("image")){
         this.portadas[element.name.split(".")[0]] = element
       }
       if(element.mimeType.includes("folder")&&element.name.includes("Temporada")){
         this.temporadas.push(element.name)
       }*/
     
    });
    this.keysTemporadas = Object.keys(this.temporadas)
  }

  seleccionar(event){
    this.seleccion.emit(event)

  }

  temporadaSeleccionada = ""
  seleccionarTemporada(item){
    this.temporadaSeleccionada = item
  }
  SortArray(x, y){
    return x.name.localeCompare(y.name);
  }


}
