import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TemporadasService {

  constructor(private http: HttpClient) { }

  getAllLinks(){
    console.log(this.http)
    return this.http.get("https://api-simpsons.herokuapp.com/api/allLinks");
    
  }

}
