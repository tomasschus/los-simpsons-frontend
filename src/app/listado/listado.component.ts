import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() allCapitulos;
  @Output() seleccion = new EventEmitter()
  temporadas = []
  capitulos = []
  constructor() { }

  ngOnInit(): void {
    var aux = []
    this.allCapitulos.forEach(element => {
      if(element.mimeType.includes("video")){
        aux.push(element)
        var data = element.name.split("Los Simpsons ")[1].split(" -")[0]
        var temporada = data.split("x")[0]
        var capitulo = data.split("x")[1]

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
    this.capitulos = aux
  }

}
