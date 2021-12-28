import { Component, OnInit, ViewChild } from '@angular/core';
import { ListadoComponent } from 'src/app/listado/listado.component';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("listado") listado: ListadoComponent;
  allCapitulos = []
  capSelect = null
  
  constructor(private cloudService: CloudService) { }
  
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
