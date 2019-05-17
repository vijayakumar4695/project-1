import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
create:any;
  constructor(public dataservice:DataserviceService,private routing:Router) { }

  ngOnInit() {
  }
  createOrder(value){
  console.log(value)
  this.dataservice.createodr(value).then(res=>{
    this.create=res;
    alert("Order Create Successfully")
    this.routing.navigate(['Audi/list']);
    console.log(res)
  })
  }

}
