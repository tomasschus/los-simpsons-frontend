import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit {
 
  @Input() capSelect;
  @Output() volver = new EventEmitter()

  nombreCap: String=""
  urlFinal = ""
  constructor() { }

  ngOnInit(): void {
    this.urlFinal = `//sendvid.com/embed/${this.capSelect["id"]}`
    console.log(this.urlFinal)
    this.nombreCap = this.capSelect.name.replace("LS", "Los Simpsons")

  }

  volverBtn(){
    this.volver.emit(null)
  }

}
