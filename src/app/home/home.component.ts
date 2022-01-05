import { Component, OnInit, ViewChild } from '@angular/core';
import { ListadoCapitulosComponent } from '../listado-capitulos/listado-capitulos.component';
import { TemporadasService } from '../services/temporadas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  @ViewChild("listado") listado: ListadoCapitulosComponent;
  allCapitulos = []
  capSelect = null 
  
  constructor(private cloudService: TemporadasService) { }
  
  ngOnInit(): void {

    this.cloudService.getAllLinks().subscribe(
      data=>{
        this.allCapitulos = data["files"]
        setTimeout(() => {
          this.listado.loadData();
        }, 200);
      }
    );
  }


  seleccionar(event){
    this.capSelect = event
  }

  verListado(){
    this.capSelect=null;
    setTimeout(() => {
      this.listado.loadData()
    }, 200);
  }

}
