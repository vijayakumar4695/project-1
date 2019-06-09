import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
  join:any;
  constructor(public dataservice:DataserviceService,private routing:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
 
  createOrder(value){
    this.spinner.show();
     this.dataservice.createOdr(value).subscribe(res=>{
       this.spinner.hide();
      swal.fire({
        type:'success',
        text: res['status'],
      })
       this.routing.navigate(['/Audi/order/list']);
      console.log(res);
     })
   
   
  



  //   this.spinner.show(); 
  //   setTimeout(() => { 
  // this.dataservice.createOdr(value).then(res=>{
  //   this.join=res;
  //   swal.fire({
  //     title: 'Order created',
  //     text: "You will be create the order successfully!",
  //     type: 'success',
  //     confirmButtonColor: '#3085d6',
  //     confirmButtonText: 'ok'
  //   });
  //   this.routing.navigate(['Audi/list']);
  // })
  // this.spinner.hide();
  // }, 1000);
  }
  list(){
    this.spinner.show(); 
    this.routing.navigate(['/Audi/order/list']);
    this.spinner.hide();
  }
  

}



