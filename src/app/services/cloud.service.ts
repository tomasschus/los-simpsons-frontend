import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  getAllLinks(){
    console.log(this.http)
    return this.http.get("localhost:4000/api/allLinks");
    
  }
}
