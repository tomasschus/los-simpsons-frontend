import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TemporadasService {

  constructor(private http: HttpClient) { }

  getAllLinks(){
    console.log(this.http)
    //https://api-simpsons.herokuapp.com/api/allLinks
    return this.http.get("http://localhost:4000/api/allLinks");
    
  }

}
