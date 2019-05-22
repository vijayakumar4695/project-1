import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  ordermanagemant:any;
  check:any;
  getData1:any;
  constructor(private http:HttpClient) { }

  regData(value){
  //  var obj={
  //   status:'success'
  //   }
  //   return obj
  // }
  return this.http.post('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/ordermanagement',value).toPromise()
  .then((data)=>{
    resolve(data)
  })
 } 
    
    getData(){
      return this.http.get('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/ordermanagement')
      .pipe(map(data=>this.check=data))
    }
    

   createOdr(value){
    return this.http.post('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/createorder',value).toPromise()
    .then((data)=>{
      resolve(data)
    })
   }

   getOrder(){
    return this.http.get('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/createorder')
    .pipe(map(data=>this.check=data))
  }
  delOrder(value){
    return this.http.delete('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/createorder/'+value,)
    .pipe(map(data=>this.getData1=data))
  }




}
