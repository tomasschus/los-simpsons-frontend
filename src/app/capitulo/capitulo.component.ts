import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit {

  @Input() capSelect;
  @Output() volver = new EventEmitter()

  urlFinal = ""
  constructor() { }

  ngOnInit(): void {
    this.urlFinal = `https://drive.google.com/file/d/${this.capSelect["id"]}/preview` 
    console.log(this.urlFinal)
    
  }

  volverBtn(){
    this.volver.emit(null)
  }

}
