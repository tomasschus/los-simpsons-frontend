import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-capitulos',
  templateUrl: './listado-capitulos.component.html',
  styleUrls: ['./listado-capitulos.component.css']
})
export class ListadoCapitulosComponent implements OnInit {

  @Input() allCapitulos;
  @Output() seleccion = new EventEmitter()
  temporadas = []
  capitulos = []
  constructor() { }

  ngOnInit(): void {    
  }

  loadData(){
    var aux = []
    this.allCapitulos.forEach(element => {
      if(element.mimeType.includes("video")){
        aux.push(element)
        var data = element.name.split("Los Simpsons ")[1].split(" -")[0]
        /*var temporada = data.split("x")[0]
        var capitulo = data.split("x")[1]*/

      }
      if(element.mimeType.includes("folder")&&element.name.includes("Temporada")){
        this.temporadas.push(element.name)
      }
    });
    this.temporadas.sort()
  }

  seleccionar(event){
    this.seleccion.emit(event)

  }

  temporadaSeleccionada = ""
  seleccionarTemporada(item){
    this.temporadaSeleccionada = item
    var numeroTemp = parseInt(this.temporadaSeleccionada.split(" ")[1])
    var aux = []
    this.allCapitulos.forEach(element => {
      if(element.mimeType.includes("video")){
        var data = element.name.split("Los Simpsons ")[1].split(" -")[0]
        var temporada = parseInt(data.split("x")[0])
        if(temporada==numeroTemp){aux.push(element)}
      }
    });
    aux.sort(this.SortArray)
    console.log(aux)
    this.capitulos = aux
  }
  SortArray(x, y){
    return x.name.localeCompare(y.name);
  }


}
