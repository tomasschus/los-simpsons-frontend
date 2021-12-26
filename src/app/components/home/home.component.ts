import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCapitulos
  capSelect
  
  constructor(private cloudService: CloudService) { }
  
  ngOnInit(): void {
    this.allCapitulos = this.cloudService.getAllLinks().files;
    
  }


  seleccionar(event){
    this.capSelect = event
  }
}
