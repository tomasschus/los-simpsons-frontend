import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { elementEventFullName } from '@angular/core/src/view';

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
  portadas = {}

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

      if(element.mimeType.includes("image")){
        var name  = element.name.split(".")
        this.portadas[name[0]] = (element)
      }
    });
    this.temporadas.sort()
    console.log(this.portadas)
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

  getPortadaByTemporada(item){
    var number = parseInt(item.split(" ")[1]);
    return( "https://drive.google.com/uc?id=" + this.portadas[number]["id"])
  }


}
