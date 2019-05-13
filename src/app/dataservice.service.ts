import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  check:any;

  constructor(private http:HttpClient) { }

  regData(value){
  //  var obj={
  //   status:'success'
  //   }
  //   return obj
  // }
  return this.http.post('',value).toPromise()
  .then((data)=>{
    (data)
  })
 } 
    
    getData(){
      return this.http.get('')
      .pipe(map(data=>this.check=data))
    }
}
