import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  check:any;

  constructor(private http:HttpClient) { }

  regData(data){
    return this.http.post('',data)
    .pipe(map(data=>this.check=data)) 
    }
    getData(){
      return this.http.get('')
      .pipe(map(data=>this.check=data))
    }
}
