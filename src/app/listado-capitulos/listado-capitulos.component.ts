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
  portadas = {}

  constructor() { }

  ngOnInit(): void {    
  }

  loadData(){
    var aux = []
    this.allCapitulos.forEach(element => {
      if(element.mimeType.includes("video")){
        aux.push(element)
      }
      if(element.mimeType.includes("image")){
        this.portadas[element.name.split(".")[0]] = element
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
        try{
          var data = element.name.split(" ")[2] 
          var temporada = parseInt(data.split("x")[0])
          if(temporada==numeroTemp){
            aux.push(element)
          }
        }
        catch (error){
          console.log(error)
        }
      }
    });
    aux.sort(this.SortArray)
    this.capitulos = aux
  }
  SortArray(x, y){
    return x.name.localeCompare(y.name);
  }


}
