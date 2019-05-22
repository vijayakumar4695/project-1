import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
  join:any;
  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
  }
  createOrder(value){
  this.dataservice.createOdr(value).then(res=>{
    this.join=res;
    swal.fire({
      title: 'Order created',
      text: "You will be create the order successfully!",
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'ok'
    });
    this.routing.navigate(['Audi/list']);
  })
  }

}
